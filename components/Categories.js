import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
    return (
        <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }} 
        horizontal
        showsHorizontalScrollIndicator={false}>
            <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="placeholder 1"/>
            <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="placeholder 2"/>
            <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="placeholder 3"/>
            <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="placeholder 4"/>
            <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="placeholder 5"/>
            <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="placeholder 6"/>
            <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="placeholder 7"/>
            <Text>Categories</Text>
        </ScrollView>
    );
};

export default Categories;
