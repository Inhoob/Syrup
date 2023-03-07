import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getOrderPageInfo} from '../api/queries';
import {ActivityIndicator} from 'react-native';
import colors from '../styles/colors';
import {formatMoney} from '../utils/Math';
import ChevronRight from '../assets/menu/point_chevron_right.svg';
import MenuChevronRight from '../assets/menu/menu_chevron_right.svg';
import HorizontalLine from '../components/HorizontalLine';
import RoundedCard from '../components/RoundedCard';
import BtnCTA from '../components/BtnCTA';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuGroupList from '../components/Order/MenuGroupList';
import Menus from '../components/Order/Menus';

interface StoreInfo {
  name: string;
  point: number;
  delivery_fee: number;
  min_price: number;
}

export interface MenuGroupInfo {
  description?: string;
  sort: number;
  name: string;
  menu_info: MenuInfo[];
}

interface MenuInfo {
  name: string;

  description?: string;
  price: {name: string; price: number}[];
  img?: string;
  sold_out: boolean;
}

function Order() {
  const [isLoading, setIsLoading] = useState(false);
  const [orderPageInfo, setOrderPageInfo] = useState(null);
  // const [currentTab, setCurrentTab] = useState('menu'); 메뉴/정보 탭 활성화 시 사용
  const [menuGroup, setMenuGroup] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await getOrderPageInfo();
        setOrderPageInfo(res);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!orderPageInfo) {
    return <ActivityIndicator />;
  }

  if (isLoading) {
    return <ActivityIndicator />;
  }

  const {
    store_info,
    menu_group_info,
  }: {store_info: StoreInfo; menu_group_info: MenuGroupInfo[]} = orderPageInfo;

  return (
    <View style={styles.container}>
      <View style={styles.storeInfo}>
        <Text style={text.storeName}>{store_info.name}</Text>
        <View style={styles.myPoint}>
          <Text style={text.myPoint}>보유 포인트 </Text>
          <Text style={[text.myPoint, {fontWeight: '900'}]}>
            {formatMoney(store_info.point)}P
          </Text>
          <ChevronRight width={12} height={12} color={colors.coralTwo} />
        </View>
        <View style={{height: 20}} />
        <HorizontalLine backgroundColor={colors.pinkishGrey} />
        <View style={{height: 15}} />
        <View style={styles.deliveryFee}>
          <View>
            <View
              style={[
                styles.row,
                {marginBottom: 5, justifyContent: 'flex-start'},
              ]}>
              <View style={{marginRight: 5}}>
                <MenuChevronRight width={5} height={7} />
              </View>
              <Text style={text.deliveryFee}>배달비</Text>
              <Text style={[text.deliveryFee, {fontWeight: 'normal'}]}>
                {store_info.delivery_fee}원
              </Text>
              <RoundedCard
                width={31}
                height={14}
                borderRadius={3}
                style={{padding: 0, marginBottom: 0, justifyContent: 'center'}}
                backgroundColor={colors.white}>
                <Text
                  style={{
                    color: colors.pinkishGrey,
                    fontSize: 8,
                    fontWeight: '500',
                    letterSpacing: -0.2,
                    textAlign: 'center',
                  }}>
                  자세히
                </Text>
              </RoundedCard>
            </View>
            <View style={[styles.row, {justifyContent: 'flex-start'}]}>
              <View style={{marginRight: 5}}>
                <MenuChevronRight width={5} height={7} />
              </View>
              <Text style={text.deliveryFee}>최소주문금액</Text>
              <Text style={[text.deliveryFee, {fontWeight: 'normal'}]}>
                {store_info.min_price}원
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.row}>
              <RoundedCard
                width={31}
                height={15}
                borderRadius={3}
                style={{marginBottom: 0, padding: 3}}
                backgroundColor={colors.coralTwo}>
                <Text style={{color: 'white', fontSize: 10}}>배달</Text>
              </RoundedCard>
              <RoundedCard
                width={31}
                height={15}
                borderRadius={3}
                backgroundColor={colors.pinkishGrey}
                style={{padding: 3, marginBottom: 0}}>
                <Text style={{color: 'white', fontSize: 10}}>포장</Text>
              </RoundedCard>
            </View>
          </View>
        </View>
        <View style={{height: 15}} />
        <View style={[styles.row, {justifyContent: 'center'}]}>
          <BtnCTA
            onPress={() => {}}
            style={{borderRadius: 1, borderColor: colors.pinkishGrey, flex: 1}}>
            <Icon name="share-outline" size={15} color={colors.coralTwo} />
            <Text
              style={[
                text.tab,
                {fontWeight: '500', color: colors.greyishBrown},
              ]}>
              공유하기
            </Text>
          </BtnCTA>
          <BtnCTA
            onPress={() => {}}
            style={{
              borderRadius: 1,
              borderColor: colors.pinkishGrey,
              flex: 1,
              borderLeftWidth: 0,
            }}>
            <Icon name="call" size={15} color={colors.coralTwo} />
            <Text
              style={[
                text.tab,
                {fontWeight: '500', color: colors.greyishBrown},
              ]}>
              전화하기
            </Text>
          </BtnCTA>
        </View>
      </View>
      <View style={{height: 25}} />

      <View style={styles.menus}>
        <View style={styles.tab}>
          <BtnCTA
            onPress={() => {}}
            style={{
              borderWidth: 0,
              borderTopWidth: 2,
              borderColor: colors.coralTwo,
              flex: 1,
            }}>
            <Text style={[text.tab, {color: colors.coralTwo}]}>메뉴</Text>
          </BtnCTA>
          <BtnCTA
            onPress={() => {}}
            style={{
              borderWidth: 0,
              borderColor: colors.pinkishGrey,
              flex: 1,
              borderLeftWidth: 1,
              borderBottomWidth: 1,
            }}>
            <Text style={[text.tab, {color: colors.warmGrey}]}>정보</Text>
          </BtnCTA>
        </View>
        <View style={styles.menuGroup}>
          <MenuGroupList
            data={menu_group_info}
            onPress={setMenuGroup}
            menuGroup={menuGroup}
          />
        </View>
        <Menus data={menu_group_info} />
      </View>
    </View>
  );
}

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storeInfo: {paddingHorizontal: 34},
  myPoint: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deliveryFee: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menus: {
    flex: 1,
  },
  menuGroup: {
    flexDirection: 'row',
    marginLeft: 35,
    alignItems: 'center',
  },
  tab: {
    flexDirection: 'row',
    height: 40,
  },
});

const text = StyleSheet.create({
  storeName: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: -0.2,
    color: colors.greyishBrown,
    textAlign: 'center',
  },
  myPoint: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: -0.2,
    color: colors.coralTwo,
    textAlign: 'center',
    marginRight: 2,
  },
  deliveryFee: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: -0.2,
    color: colors.greyishBrown,
    marginRight: 5,
  },
  tab: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: -0.2,
  },
});
