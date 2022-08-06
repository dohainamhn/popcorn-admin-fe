import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {
  Box,
  BoxProps,
  Grid,
  GridProps,
  List,
  ListItem,
  ListItemProps,
  ListProps,
  styled,
  Typography,
  TypographyProps,
} from '@mui/material';
import { addSlashPrefixToString } from 'helpers';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
const Container = styled(Box)<BoxProps>({
  width: '100%',
  margin: '30px 0',
  boxSizing: 'border-box',
});

const IconBox = styled(Box)<BoxProps>({
  width: '30px',
});

const Header = styled(Grid)<
  GridProps & {
    isActive?: boolean;
  }
>(({ isActive }) => ({
  display: 'flex',
  cursor: 'pointer',
  backgroundColor: isActive ? '#3636ff' : '#ffff',
  padding: '5px 10px',
  borderRadius: '10px',
  color: isActive ? '#ffff' : 'unset',
}));

const Title = styled(Typography)<TypographyProps>({
  marginLeft: '15px',
  display: 'flex',
  alignItems: 'center',
});

const DropdownIcon = styled(Box)<BoxProps>({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  '& svg': {
    fontSize: '30px',
  },
});

const Body = styled(List)<ListProps>({
  paddingLeft: '30px',
});

const ListItemCustom = styled(ListItem)<
  ListItemProps & {
    isActive?: boolean;
  }
>(({ isActive }) => ({
  cursor: 'pointer',
  background: isActive ? '#3636ff' : '#ffff',
  color: isActive ? '#ffff' : 'unset',
  borderRadius: '8px',
}));

interface ListItem {
  title: string;
  link: string;
}

interface Props {
  iconUrl: string;
  title: string;
  items: ListItem[];
  path: string;
  onItemClick: (url: string) => void;
}

export const DropdownList = ({ iconUrl, title, items, onItemClick, path }: Props) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <Container>
      <Header
        isActive={path === '/' ? location.pathname === path : location.pathname.includes(path)}
        onClick={() => {
          if (items.length > 0) {
            setOpen(!open);
          } else {
            onItemClick(addSlashPrefixToString(path));
          }
        }}
      >
        <IconBox>
          <img
            style={{
              width: '100%',
              height: '100%',
            }}
            src={iconUrl}
          />
        </IconBox>
        <Title>{title}</Title>
        <DropdownIcon>{items.length > 0 ? open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon /> : ''}</DropdownIcon>
      </Header>
      {open && (
        <Body>
          {items.map(({ title, link }, i) => (
            <ListItemCustom
              isActive={location.pathname.includes(addSlashPrefixToString(link))}
              key={i}
              onClick={() => {
                onItemClick(`${path}/${link}`);
              }}
            >
              {title}
            </ListItemCustom>
          ))}
        </Body>
      )}
    </Container>
  );
};
