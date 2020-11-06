import React, { useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native';

import {
  Container,
  ListContainer,
  List,
  ValueContainer,
  Value,
  Prefix,
  Item,
  ItemText,
  ItemContainerWidth
} from './styles';
import Carousel from 'react-native-snap-carousel';

interface ICustomSlider {
  prefix: string;
}

const ListItem = ({ item }: { item: any }): any => {
  console.log('ListItem', item);

  return (
    <Item>
      <ItemText>{item.value}</ItemText>
    </Item>
  );
};

const CustomSlider: React.FC<ICustomSlider> = ({ prefix }) => {
  const listRef = useRef<ScrollView>(null);
  const [value, setValue] = useState<number | null>(80);
  const [items, setItems] = useState<{ value: number }[]>([]);

  useEffect(() => {
    const _itens: any[] = [];
    [...new Array(300)].map((v, i) => _itens.push({ value: i + 1 }));

    console.log(_itens);

    setItems(_itens);
  }, []);

  function calculeX(index: number) {
    // if (index > 0)
    return ItemContainerWidth * index;
    // // else if (index == items.length - 1) return metrics.screenWidth * 0.15;
    // else return metrics.screenWidth * 0.06;
  }

  useEffect(() => {
    if (items.length && value) {
      listRef.current?.scrollTo({
        y: 0,
        x: calculeX(value - 1),
        animated: false
      });
    }
  }, [items, value]);

  return (
    <Container>
      <ListContainer>
        {/* <List showsHorizontalScrollIndicator={false} ref={listRef} horizontal>
          {items.map((v, i) => (
            <ListItem key={`custom_slider_${prefix}_${i}`} item={v} />
          ))}
        </List> */}
        <Carousel
          // ref={(c) => {
          //   this._carousel = c;
          // }}
          data={items}
          renderItem={ListItem}
          sliderWidth={300}
          itemWidth={ItemContainerWidth}
        />
      </ListContainer>
      <ValueContainer>
        <Value>{`${value} `}</Value>

        <Prefix>{prefix}</Prefix>
      </ValueContainer>
    </Container>
  );
};

export default CustomSlider;
