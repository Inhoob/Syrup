import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import colors from '../styles/colors';
import {getMainPageInfo} from '../api/queries';
import RoundImage from '../components/RoundImage';
import Heart from '../assets/home/heart.svg';
import ChevronRight from '../assets/home/chevron_right.svg';
import AddressPin from '../assets/home/address_pin.svg';
import DeliveryPig from '../assets/home/home_delivery_menu.svg';
import HomeStorePig from '../assets/home/home_store_menu.svg';
import HomeTakeoutPig from '../assets/home/home_takeout_menu.svg';
import Cake from '../assets/home/cake.svg';
import Store from '../assets/home/store.svg';
import {Switch} from 'react-native';
import RoundedCard from '../components/RoundedCard';
import {formatMoney} from '../utils/Math';
import RoundedCardWithBackground from '../components/RoundedCardWithBackground';

interface MainPageInfo {
  grade: {img: string; name: string};
  last_store: {img: string; name: string};
  new_store_list: {name: string}[];
  point: number;
}

const HeaderTitle = () => (
  <>
    <View style={{marginRight: 8}}>
      <AddressPin width={8} height={12} />
    </View>
    <Text style={{fontWeight: 'bold', fontSize: 12, color: colors.warmGrey}}>
      금천구 디지털로 173
    </Text>
    <View style={{marginRight: 8}}>
      <ChevronRight width={7} height={10} />
    </View>
  </>
);

function Home() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [mainPageInfo, setMainPageInfo] = useState<MainPageInfo>(
    {
      grade: {img: '', name: ''},
      last_store: {img: '', name: ''},
      new_store_list: [],
      point: 0,
    },
    // null,
  );

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await getMainPageInfo();
        setMainPageInfo(res);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerTitleContainerStyle: {flexDirection: 'row', alignItems: 'center'},
      headerTitle: <HeaderTitle />,
    });
  }, [navigation]);

  const {grade, last_store, new_store_list, point} = mainPageInfo;

  if (!mainPageInfo) {
    return <ActivityIndicator />;
  }

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.myPointAndLevel}>
        <View style={styles.myPoint}>
          <Text style={[text.myPointAndLevel, {textAlign: 'left'}]}>
            사용가능한 내 포인트 {'\n'}
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>
              {formatMoney(point)}P{' '}
            </Text>
            있어요!
          </Text>
        </View>
        <View style={styles.myLevel}>
          <View style={{marginRight: 14}}>
            <Text style={text.myLevel}>내등급 </Text>
            <Text style={[text.myLevel, {color: colors.warmGrey}]}>
              {grade.name}
            </Text>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Heart width={8} height={8} />
            </View>
          </View>
          <RoundImage
            source={
              grade.img ? grade.img : require('../assets/menu/no_image.png')
            }
            size={70}
            color={colors.veryLightPink2}
          />
        </View>
      </View>
      <View style={styles.horizontal}>
        <View style={styles.heartWrapper}>
          <View style={{marginRight: 5}}>
            <Heart width={14} height={14} />
          </View>
          <Text style={text.heartComment}>쌓인 포인트, 할인받고 주문하자!</Text>
        </View>
        <View style={styles.toggleWrapper}>
          <Text style={text.toggle}>간단히 보기</Text>
          <Switch
            trackColor={{false: '#f5f5f5', true: colors.veryLightPink}}
            thumbColor={isEnabled ? colors.white : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{marginLeft: 8}}
          />
        </View>
      </View>
      <View style={styles.cardsWrapper}>
        <View style={styles.cardsRow}>
          <RoundedCard
            width={155}
            height={120}
            backgroundColor={colors.coralTwo}>
            <Text style={[text.cardTitle, {color: colors.white}]}>
              모든 매장
            </Text>
            <Text style={[text.cardComment, {color: colors.white}]}>
              내 주변에 있는 {'\n'}모든 매장 볼래요!
            </Text>
            <Store
              width={54}
              height={81}
              style={{position: 'absolute', right: 0, bottom: 0}}
            />
          </RoundedCard>
          <RoundedCard width={155} height={120}>
            <Text style={[text.cardTitle, {color: colors.coralTwo}]}>배달</Text>
            <Text style={[text.cardComment, {color: colors.warmGrey}]}>
              안전하고 빠르게{'\n'}배달해주세요
            </Text>
            <DeliveryPig
              width={47}
              height={79}
              style={{position: 'absolute', right: 10, bottom: 10}}
            />
          </RoundedCard>
        </View>
        <View style={styles.cardsRow}>
          <View>
            <RoundedCard width={155} height={73}>
              <Text style={[text.cardTitle, {color: colors.coralTwo}]}>
                포장
              </Text>
              <Text style={[text.cardComment, {color: colors.warmGrey}]}>
                직접 가져갈게요!
              </Text>
              <HomeTakeoutPig
                width={45}
                height={53}
                style={{position: 'absolute', right: 10, bottom: 10}}
              />
            </RoundedCard>
            <RoundedCard width={155} height={73}>
              <Text style={[text.cardTitle, {color: colors.coralTwo}]}>
                매장
              </Text>
              <Text style={[text.cardComment, {color: colors.warmGrey}]}>
                매장에서 먹고가요!
              </Text>
              <HomeStorePig
                width={36}
                height={53}
                style={{position: 'absolute', right: 10, bottom: 10}}
              />
            </RoundedCard>
          </View>

          <RoundedCardWithBackground
            style={{width: 155, height: 156}}
            source={
              last_store.img
                ? {uri: last_store.img}
                : require('../assets/menu/no_image.png')
            }>
            <Text style={[text.cardTitle, {color: colors.white}]}>
              최근 주문 매장
            </Text>
            <Text
              style={[
                text.cardComment,
                {color: colors.white, fontSize: 12, fontWeight: '500'},
              ]}>
              {last_store.name}
            </Text>
          </RoundedCardWithBackground>
        </View>
        <View style={styles.cardsRow}>
          <RoundedCard width={155} height={160}>
            <Text
              style={[
                text.cardTitle,
                {color: colors.warmGrey, marginBottom: 10},
              ]}>
              새로 생겼어요!
            </Text>
            {new_store_list.map(el => {
              return (
                <View
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  key={el.name}>
                  <View style={styles.Dot} />
                  <Text
                    style={[text.cardComment, {color: colors.warmGrey}]}
                    numberOfLines={1}
                    ellipsizeMode="clip">
                    {el.name}
                  </Text>
                </View>
              );
            })}
          </RoundedCard>
          <RoundedCard
            width={155}
            height={160}
            backgroundColor="#f9f9f9"
            onPress={() => navigation.navigate('OrderNav', {screen: 'Order'})}>
            <Text style={[text.cardTitle, {color: colors.warmGrey}]}>
              카페 추천
            </Text>
            <Text style={[text.cardComment, {color: colors.warmGrey}]}>
              밥먹었으면 디저트는 필수!{'\n'}내 주변 디저트 카페
            </Text>
            <Cake
              width={46}
              height={50}
              style={{position: 'absolute', right: 20, bottom: 20}}
            />
          </RoundedCard>
        </View>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 35,
    marginVertical: 40.5,
  },
  myPointAndLevel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  myLevel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myPoint: {},
  horizontal: {
    marginTop: 35,
    height: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heartWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardsWrapper: {
    alignItems: 'center',
    flex: 1,
    marginTop: 20,
  },
  cardsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  Dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: colors.coralTwo,
    marginRight: 5,
    marginTop: 10,
  },
});

const text = StyleSheet.create({
  myLevel: {
    color: colors.pinkishGrey,
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 3,
  },
  myPointAndLevel: {
    fontSize: 18,
    letterSpacing: -0.2,
    textAlign: 'center',
    color: colors.greyishBrown,
  },
  heartComment: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: -0.2,
    color: colors.warmGrey,
  },
  toggle: {
    fontSize: 10,
    letterSpacing: -0.2,
    textAlign: 'right',
    color: colors.pinkishGrey,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: -0.2,
  },
  cardComment: {
    fontSize: 10,
    letterSpacing: -0.2,
    marginTop: 10,
  },
});
