import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Button, View, Text } from 'react-native';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

export default StackNavigator({
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        }
});
