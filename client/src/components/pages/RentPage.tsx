import { Box, Button, Flex, HStack, Select, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import HeaderRentPage from '../ui/RentPageUi/HeaderRentPage';
import './center.css';
import AddEquipPage from './AddEquipPage';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { getAllEquipmentCategoryThunk } from '../../redux/slices/equipment/equipmentCategoryThunkAction';
import { getAllEquipmentThunk } from '../../redux/slices/equipment/equipmentThunkActions';
import EquipCard from '../ui/RentPageUi/EquipCard';
import {
  changeCategoryEquipment,
  setCleanEquip,
  setSelectedCategoryEquipment,
} from '../../redux/slices/equipment/equipmentSlice';

export default function RentPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const categories = useAppSelector((state) => state.equipment.category);
  const equipments = useAppSelector((state) => state.equipment.equipment);
  const filter = useAppSelector((state) => state.equipment.filter);
  const allCount = useAppSelector((state) => state.equipment.allCount);
  const offset = useAppSelector((state) => state.equipment.offset);

  console.log('-------->>>,', categories, '---------------->', equipments);

  const handleCategoryEquipChenge = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    void dispatch(setSelectedCategoryEquipment(Number(e.target.value)));
    void dispatch(changeCategoryEquipment());
  };

  useEffect(() => {
    void dispatch(getAllEquipmentCategoryThunk());
    return () => {
      dispatch(setCleanEquip());
    };
  }, []);

  useEffect(() => {
    void dispatch(getAllEquipmentThunk({ id: filter, offset }));
  }, [filter]);

  return (
    <Box className="center_100">
      <HeaderRentPage />
      <Flex mt="10px" justify="space-between">
        <HStack spacing={3}>
          <Select placeholder="Все оборудование" background="white" onChange={handleCategoryEquipChenge}>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option> // eslint-disable-line react/jsx-key
            ))}
          </Select>
          <Button
            width="180px"
            colorScheme="teal"
            size="md"
            onClick={() => {
              if (offset !== allCount) {
                void dispatch(getAllEquipmentThunk({ id: filter, offset: equipments.length }));
              }
            }}
            disabled={offset === allCount}
          >
            Показать еще
          </Button>
        </HStack>
      </Flex>
      <Box className="center" mt="10px">
        <SimpleGrid columns={[1, 1, 1, 3]} spacing={10}>
          {equipments?.map((equip) => <EquipCard equip={equip} key={equip.id} />)}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
