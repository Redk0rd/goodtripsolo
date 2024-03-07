import React from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import type { EquipmentType } from '../../../types/equipmentType';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook';

type EquipTypeProps = {
  equip: EquipmentType;
};

export default function EquipCard({ equip }: EquipTypeProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Card maxW="sm" borderRadius="20px">
      <CardBody>
        <Image
          src={`${import.meta.env.VITE_APP_BASE_IMG}/${equip.pathImg}`}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Badge ml="1" fontSize="0.8em" colorScheme="purple">
          {equip.CategoryEquipment?.name}
        </Badge>
        <Heading mt="4" size="md">
          {equip.name}
        </Heading>
        <Flex mt="4" align="center">
          <Avatar src={equip.User?.pathImg} />
          <Box ml="3">
            <Text fontWeight="bold">{equip.User?.name}</Text>
          </Box>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="ghost" colorScheme="blue" as={Link} to={`/equip/${equip.id}`}>
            Подробнее
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
