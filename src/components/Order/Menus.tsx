import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {formatMoney} from '../../utils/Math';
import {MenuGroupInfo} from '../../screens/Order';

interface MenusProps {
  data: MenuGroupInfo[];
}

function Menus({data}: MenusProps) {
  const [activeSection, setActiveSection] = useState(
    Array.from(Array(data.length).keys()),
  );

  const renderHeader = (
    section: MenuGroupInfo,
    _: number,
    isActive: boolean,
  ) => {
    const isActiveSection = isActive;

    return (
      <View style={styles.header}>
        <Text style={text.header}>{section.name}</Text>
        <Icon
          name={isActiveSection ? 'chevron-up' : 'chevron-down'}
          size={14}
          color={colors.pinkishGrey}
          style={{marginRight: 35}}
        />
      </View>
    );
  };

  const renderContent = (section: MenuGroupInfo) => {
    const {menu_info} = section;

    return (
      <View>
        {menu_info.map((menu, index) => {
          return (
            <View style={styles.menuContainer} key={`${menu.name}-${index}`}>
              <View style={{width: 230}}>
                <Text style={text.name}>{menu.name}</Text>
                <Text style={text.description}>{menu.description}</Text>
                <View style={styles.price}>
                  {menu.price.map(el => {
                    return (
                      <Text key={el.name} style={text.price}>
                        {el.name} : {formatMoney(el.price)}원
                      </Text>
                    );
                  })}
                </View>
              </View>
              {menu.img ? (
                <Image source={{uri: menu.img}} style={styles.image} />
              ) : (
                <Image
                  source={require('../../assets/menu/no_image.png')}
                  style={styles.image}
                />
              )}
            </View>
          );
        })}
      </View>
    );
  };

  const updateSection = (index: number[]) => {
    if (activeSection.indexOf(index[0]) === -1) {
      setActiveSection([...activeSection, index[0]]);
      return;
    }
    setActiveSection(index);
  };
  return (
    <ScrollView>
      <Accordion
        activeSections={activeSection}
        sections={data}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateSection}
      />
    </ScrollView>
  );
}

export default Menus;
const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    paddingVertical: 25,

    borderBottomWidth: 0.5,
    borderColor: colors.pinkishGrey,
  },
  header: {
    height: 50,
    backgroundColor: '#F6f6f6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    padding: 10,
  },
  contentText: {
    fontSize: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderWidth: 0.5,
    borderColor: colors.pinkishGrey,
  },
  price: {
    marginTop: 20,
  },
});

const text = StyleSheet.create({
  header: {
    fontSize: 14,
    letterSpacing: -0.2,
    color: colors.greyishBrown,
    marginLeft: 35,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: -0.2,
    color: colors.greyishBrown,
  },
  description: {
    fontSize: 10,
    letterSpacing: -0.2,
    color: colors.warmGrey,
    marginTop: 5,
  },
  price: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: -0.2,
    color: colors.greyishBrown,
  },
});
