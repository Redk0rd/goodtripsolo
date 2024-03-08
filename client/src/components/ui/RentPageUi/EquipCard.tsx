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
    <Card
      // className="container_card_tour"
      background="#00000090"
      maxW="sm"
      borderRadius="20px"
      border="2px solid #ffffff47"
      mt={3}
    >
      <CardBody>
        <Flex direction="column" align="center">
          <Image
            src={`${import.meta.env.VITE_APP_BASE_IMG}/${equip.pathImg}`}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Flex>
        <Flex mt={3}>
          <Badge ml="1" fontSize="0.8em" colorScheme="purple">
            {equip.CategoryEquipment?.name}
          </Badge>
        </Flex>

        <Heading mt="4" size="md" color="white" textAlign="center">
          {equip.name}
        </Heading>
        <Flex mt="4" align="center" justify="center">
          <Avatar src={equip.User?.pathImg} />
          <Box ml="3">
            <Text color="white" fontWeight="bold">
              {equip.User?.name}
            </Text>
          </Box>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter display="flex" justify="center">
        <ButtonGroup spacing="2">
          <Button
            color="white"
            border="1px solid white"
            background="#ffffff47"
            transition="background 0.2s, border 0.1s" // Добавление анимации при изменении background и border
            _hover={{ background: '#ffffff67' }} // Изменение цвета фона и появление границы при наведении
            variant="ghost"
            as={Link}
            to={`/equip/${equip.id}`}
          >
            Подробнее
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
