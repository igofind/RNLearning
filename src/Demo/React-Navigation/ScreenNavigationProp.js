import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Home extends Component {
    static navigationOptions = (({ navigation }) => ({
        title: `Header is ${navigation.state.params.user}`,
    })
    );

    render() {
        const navigation = this.props.navigation;
        const { setParams } = navigation;
        return (
            <View>
                <Text>自定义 StackNavigator header !</Text>
                {/* setParams 每次调用都会重新导航当前页面（重新render）？ */}
                <TextInput
                    value={navigation.state.params.user}
                    onChangeText={(newValue) => {
                        setParams({ user: newValue });
                    }}
                />
            </View>
        );
    }
}

const ScreenNavigationProp = StackNavigator({
    Home: {
        screen: Home,
    },
}, {
    initialRouteName: 'Home',
    initialRouteParams: {
        user: 'Ryn',
    },
});

export default ScreenNavigationProp;
