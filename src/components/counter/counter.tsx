import {
  Button,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../store/actions/counterActions';
import { ApplicationState } from '../../store/reducers';
import React from 'react';


export const Counter = () =>  {

  const  count = useSelector((state: ApplicationState) => state.counter.count);
  
  const dispatch = useDispatch();

  return  (<>
    <View style={{ }}>
      <TouchableOpacity>
        <Text>Count: {count} </Text>
      </TouchableOpacity>
        <Button  title='Click here to increase' onPress={() => dispatch(increase())} ></Button>
      <TouchableOpacity>
        <Button  title='Click here to decrease' onPress={() => dispatch(decrease())} ></Button>
      </TouchableOpacity>
    </View>  
    </>)

}

 