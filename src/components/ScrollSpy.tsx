import React, {ReactChild, useState} from "react";
import throttle from "lodash/throttle";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


const tabHeight = 69;
const StyledTabs:any = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: 30,
      width: "100%",
      backgroundColor: "#635ee7"
    }
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab:any = withStyles(theme => ({
  root: {
    textTransform: "none",
    height: tabHeight,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  indicator: {
    padding: theme.spacing(1)
  },
  demo2: {
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex:99999,
    transition: 'background-color 1s',
  }
}));

/******* This is the scroll spy magic */
/*
Credits: Material UI
Source: 
https://github.com/mui-org/material-ui/blob/404c2ba16816f5c7ab7d8b2caf6bbc3d2218b820/docs/src/modules/utils/textToHash.js
*/


type UniqueObject = {
  [key:string]:boolean
}

const makeUnique = (hash:string, unique:UniqueObject, i:number = 1):string => {
  const uniqueHash:string = i === 1 ? hash : `${hash}-${i}`;

  if (!unique[uniqueHash]) {
    unique[uniqueHash] = true;
    return uniqueHash;
  }


  return makeUnique(hash, unique, i + 1);
};

const textToHash = (text:string, unique = {}) => {
  return makeUnique(
    encodeURI(
      text
        .toLowerCase()
        .replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g, "")
        // eslint-disable-next-line no-useless-escape
        .replace(/[!@#\$%\^&\*\(\)=_\+\[\]{}`~;:'"\|,\.<>\/\?\s]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
    ),
    unique
  );
};
const noop = () => {};

function useThrottledOnScroll(callback:(()=>void)|null, delay:number) {
  const throttledCallback:any = React.useMemo(
    () => (callback ? throttle(callback, delay) : noop),
    [callback, delay]
  );

  React.useEffect(() => {
    if (throttledCallback === noop) return undefined;

    window.addEventListener("scroll", throttledCallback);
    return () => {
      window.removeEventListener("scroll", throttledCallback);
      throttledCallback.cancel();
    };
  }, [throttledCallback]);
}

type TabType ={
  icon?:string
  text:string
  component:ReactChild
}

interface Props{
  tabsInScroll:TabType[]
}

type ItemsServer = {
  icon:string
  text:string
  component:ReactChild
  hash:string
  node:HTMLElement | null
}

const ScrollSpyTabs: React.FC<Props> = (props:Props):JSX.Element=> {
  const [activeState, setActiveState] = React.useState<string|null>(null);
  const { tabsInScroll } = props;

  let itemsServer:any = tabsInScroll.map((tab:TabType):ItemsServer=> {
    const hash = textToHash(tab.text);
    return {
      icon: tab.icon || "",
      text: tab.text,
      component: tab.component,
      hash: hash,
      node: document.getElementById(hash)
    };
  });

  const itemsClientRef = React.useRef([]);
  React.useEffect(() => {
    itemsClientRef.current = itemsServer;
  }, [itemsServer]);

  const clickedRef = React.useRef(false);
  const unsetClickedRef:React.MutableRefObject<any> = React.useRef(null);
  const findActiveIndex = React.useCallback(() => {
    // set default if activeState is null
    if (activeState === null) setActiveState(itemsServer[0].hash);

    // Don't set the active index based on scroll if a link was just clicked
    if (clickedRef.current) {
      if( document.documentElement.scrollTop>475) setChangeColor(true);
      else setChangeColor(false);
      return;
    }

    let active;
    for (let i = itemsClientRef.current.length - 1; i >= 0; i -= 1) {
      // No hash if we're near the top of the page
      if (document.documentElement.scrollTop < 0) {
        active = { hash: null };
        break;
      }

      const item:any = itemsClientRef.current[i];

      if (
        item.node &&
        item.node.offsetTop <
          document.documentElement.scrollTop +
            document.documentElement.clientHeight / 8 +
            tabHeight
      ) {
        active = item;
        break;
      }

      if( document.documentElement.scrollTop>475) setChangeColor(true);
      else setChangeColor(false);
    }

    if (active && activeState !== active.hash) {
      setActiveState(active.hash);
      
    }
  }, [activeState, itemsServer]);

  // Corresponds to 10 frames at 60 Hz
  useThrottledOnScroll(itemsServer.length > 0 ? findActiveIndex : null, 166);

  const handleClick = (hash:string):void => {
    // Used to disable findActiveIndex if the page scrolls due to a click
    clickedRef.current = true;
    unsetClickedRef.current = setTimeout(() => {
      clickedRef.current = false;
    }, 1000);

    if (activeState !== hash) {
      setActiveState(hash);


      if (window)
        
          
        window.scrollTo({
          top:
          // exclamation mark surpress object could be null error
            document.getElementById(hash)!.getBoundingClientRect().top +
            window.pageYOffset-69, // 69 is height of scrollspy bar
          behavior: "smooth"
        });

      
    }
  };

  React.useEffect(
    () => () => {
      clearTimeout(unsetClickedRef.current);
    },
    []
  );

  const classes = useStyles();
  
  const [changeColor, setChangeColor] = useState(false);

  return (
    <div>
      <nav className={classes.demo2} style={{backgroundColor:changeColor?"#989898":"#ffffff"}}>
        <StyledTabs value={activeState ? activeState : itemsServer[0].hash}>
          {itemsServer.map((item2:ItemsServer) => (

            <StyledTab
              key={item2.hash}
              label={item2.text}
              onClick={()=>handleClick(item2.hash)}
              value={item2.hash}
            />
          ))}
        </StyledTabs>
        <div className={classes.indicator} />
      </nav>

      <div className="container">
        {itemsServer.map((item1:ItemsServer) => (
          <article id={item1.hash} key={item1.text}>
            {item1.component}
          </article>
        ))}
      </div>
    </div>
  );
}

export default ScrollSpyTabs;
