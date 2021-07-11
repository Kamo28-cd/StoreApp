import React from 'react';
import {SafeAreaView, Dimensions, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import COLORS from '../../consts/colors';
import {Icon, Button, SocialIcon} from 'react-native-elements';

const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
	const categoryItems = [
			{name: 'Chair', iconName: 'seat-outline'},
			{name: 'Table', iconName: 'table-furniture'},
			{name: 'Cupboard', iconName: 'cupboard-outline'},
			{name: 'Bed', iconName: 'bed-queen-outline'},
			
	];

	const ListCategories = () => {

		const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
		
		return (
			<View style={style.categoriesContainer}>
			{categoryItems.map((item, index) => (
			<TouchableOpacity activeOpacity={0.8} key={index} onPress={()=>setSelectedCategoryIndex(index)}>
			
				<View style={[style.categoryItemsBtn, {backgroundColor:selectedCategoryIndex == index ? COLORS.dark: COLORS.light},]}>
					<Icon name={item.iconName} type="material-community" size={20} color={selectedCategoryIndex == index ? COLORS.white: COLORS.dark}/>
					<Text style={[style.categoryText, {color:selectedCategoryIndex == index ? COLORS.white: COLORS.dark}]}>{item.name}</Text>
				</View>
			</TouchableOpacity>
			))}
			
			</View>
		);
	};

	return (
		<SafeAreaView style={{backgroundColor: COLORS.white, flex:1}}>
			<View style={style.header}>
				<Icon name="sort" size={28} color={COLORS.dark} />
				<Icon name="shopping-bag" type="sli" size={28} color={COLORS.dark} />
				
			</View>
			<Text style={style.headerTitle}>Explore Store</Text>
			<View style={{
				flexDirection: 'row',
				justifyContent:'space-between',
				padding:20,
				}}>
					<View style={style.searchInputContainer}>
						<Icon name="search" color={COLORS.dark} size={25}/>
						<TextInput style={{marginLeft:20}} placeholder="Search..."/>
					</View>
					<View style={style.sortBtn}>
						<Icon name="tune" color={COLORS.dark} size={25}/>
					</View>
				</View>
				<Text style={style.title}>Categories</Text>
				<ListCategories />
		</SafeAreaView>
	);
	
};

const style = StyleSheet.create({
	categoriesContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20
	},
	categoryItemsBtn: {
		flexDirection: 'row',
		backgroundColor: COLORS.light,
		padding:10,
		borderRadius:7,
		alignItems:'center'
	},
	categoryText: {
		fontSize: 13,
		fontWeight: 'bold',
		color:COLORS.dark, 
		marginLeft:5
	}, 
	header: {
		paddingVertical: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20
	}, 
	headerTitle: {
		fontSize:23,
		fontWeight: 'bold',
		width: '55%',
		lineHeight:30,
		paddingHorizontal: 20
	},
	searchInputContainer: {
		height:50,
		backgroundColor: COLORS.light,
		flex:1,
		borderRadius:12,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal:20,
	},
	sortBtn: {
		backgroundColor:COLORS.white,
		color: COLORS.dark,
		height:50,
		width:50,
		borderRadius:12,
		justifyContent:"center",
		alignItems: "center",
		marginLeft:10
	},
	title: {
		fontSize:  18,
		fontWeight: 'bold',
		paddingHorizontal: 20,
	},
});
export default HomeScreen;