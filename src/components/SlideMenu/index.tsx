import { Box, BoxProps, List, ListProps, styled } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { drawerWidth, headerHeight, transition } from 'consts';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DropdownList } from './DropdownList';
import { menus } from './menus';

// interface ListItemCustomProps extends ListItemProps {
//   active: boolean;
// }

// const openedMixin = (theme: Theme): CSSObject => ({
//   width: drawerWidth,

//   transition: transition,
//   background: theme.palette.mode === 'dark' ? '#171717' : '#fff',
//   overflow: 'unset',
//   border: 'none',
//   boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.06)',
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//   transition: transition,
//   border: 'none',
//   overflow: 'unset',
//   width: drawerWidthMinus,
//   boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.06)',
//   [theme.breakpoints.up('sm')]: {
//     width: drawerWidthMinus,
//   },
// });

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })({
  width: drawerWidth,
  height: `calc(100vh - ${headerHeight})`,
  marginTop: headerHeight,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  transition,
  background: '#ffff',
  overflow: 'unset',
  border: 'none',
  boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.06)',
  '& .MuiPaper-root': {
    position: 'unset',
    border: 'none',
  },
  // ...(open && {
  //   ...openedMixin(theme),
  //   '& .MuiDrawer-paper': openedMixin(theme),
  // }),
  // ...(!open && {
  //   ...closedMixin(theme),
  //   '& .MuiDrawer-paper': closedMixin(theme),
  // }),
});

const SideMenus = styled(List)<ListProps>(() => ({
  padding: `0 15px`,
}));

const SlideBody = styled(Box)<BoxProps>(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

export const SlideMenus = () => {
  const navigate = useNavigate();
  return (
    <Drawer open={true} variant="permanent">
      <SlideBody>
        <SideMenus>
          {menus.map(({ icon, title, path, items }, i) => {
            return (
              <DropdownList
                key={i}
                onItemClick={(url) => {
                  navigate(url);
                }}
                iconUrl={icon}
                title={title}
                path={path}
                items={items}
              />
            );
          })}
        </SideMenus>
      </SlideBody>
    </Drawer>
  );
};
