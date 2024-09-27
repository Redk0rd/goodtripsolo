import { Avatar, Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import './userPageAboutUserStyle.css';
import type { UserStateType } from '../../../../types/authType';

type UserPageAboutUserPropsType = {
  user: UserStateType;
};

export default function UserPageAboutUser({ user }: UserPageAboutUserPropsType): JSX.Element {
  return (
    <Box className="wrapper">
      <Box className="container">
        <Text className="main_title">Личный кабинет:</Text>
        <Flex className="flex_center" >
          <Box className="width_userPage">
            <Box className="ava_container">
              {/* <Image className="ava" src="null" /> */}
              <Avatar size='4xl' className="avatar" src={`${import.meta.env.VITE_APP_BASE_IMG}/${user?.pathImg}`}/>
              {/* <button type="button" className="btn">Редактировать</button> */}
              <button type="button" className="Btn">
                Редактировать
                <svg className="svg" viewBox="0 0 512 512">
                  <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                </svg>
              </button>
            </Box>
            <Box className="text_container">
              <Flex className="flex_column text_shadow">
                <Text className="text_description">Имя: {user.name}</Text>
                <Text className="text_description">
                  Email: <a href="mailto:info@example.com">{user.email}</a>
                </Text>
                <Text className="text_description">
                  Телефон: <a href="tel:+1234567890">{user.phone}</a>
                </Text>
                <Text className="text_description">
                  Телеграм: <a href={`https://t.me/${user.telegram}`}>{user.telegram}</a>
                </Text>
                <Text mt={3}className="text_description">О себе: {user.about}</Text>
               
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
