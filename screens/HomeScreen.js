import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
    const navigation = useNavigation();

    //using useLayoutEffect will run the following changes during 'mount' (similar to useEffect, triggers when loading the screen) and setOptions lets us change the defaults of the navigation element imported from react.
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView className="bg-white pt-5">
                {/*Header*/}
                <View className="flex-row pb-3 items-center mx-4 space-x-2">
                    <Image
                        source={{
                            uri: "https://links.papareact.com/wru",
                        }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                    <View className="flex-1">
                        <Text className="text-gray-400 font-bold text-xs">
                            Deliver Now!
                        </Text>
                        <Text className="font-bold text-xl">
                            Current Location
                            <ChevronDownIcon size={20} color="#00CCBB" />
                        </Text>
                    </View>
                    <UserIcon size={35} color="#00CCBB" />
                </View>
                {/*Search*/}
                <View className="flex-row items-center space-x-2 pb-2 mx-4">
                    <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                        <UserIcon size={20} color="#00CCBB" />
                        <TextInput
                            placeholder="Restaurants & cuisines"
                            keyboardType="default"
                        />
                    </View>
                    <UserIcon size={35} color="#00CCBB" />
                </View>
                {/*Body*/}
                <ScrollView
                    className="bg-gray-100"
                    contentContainerStyle={{
                        paddingBottom: 100,
                    }}
                >
                    {/*category*/}
                    <Categories />
                    {/*feature row*/}
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default HomeScreen;
