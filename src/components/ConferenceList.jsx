import React from 'react';
import { FlatList, View, Text } from 'react-native';
import ConferenceCard from './ConferenceCard';
import conferences from '../data/confbeer.js'

const ConferenceList = () => {

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={conferences}
                ItemSeparatorComponent={() => <Text> </Text>}
                renderItem={({ item }) => (
                    <ConferenceCard  {...item} />
                )}
            />
        </View>
    );
};

export default ConferenceList;