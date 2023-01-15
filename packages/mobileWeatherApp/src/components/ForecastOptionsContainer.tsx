import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const ForecastOptionsContainer: React.FC<any> = props => {
  return (
    <TouchableOpacity
      style={{
        marginBottom: '2%',
        padding: 10,
        alignSelf: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderColor: 'rgba(0,0,0,0.7)',
        borderWidth: 2,
        borderRadius: 15,
      }}
      onPress={props.clearSearch}>
      <Text style={{fontFamily: 'Avenir', fontSize: 15, fontWeight: '700'}}>
        Clear search
      </Text>
    </TouchableOpacity>
  );
};

export default ForecastOptionsContainer;
