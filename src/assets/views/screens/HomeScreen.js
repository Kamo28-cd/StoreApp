import React from 'react';
import {SafeAreaView, Dimensions, StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image, Pressable} from 'react-native';
import COLORS from '../../consts/colors';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import products from '../../consts/products';

const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
	const categoryItems = [
			{name: 'Furniture', iconName: 'table-furniture'},
			{name: 'Casual Bags', iconName: 'bag-personal-outline'},
			{name: 'Watches', iconName: 'watch'},
			{name: 'Shoes', iconName: 'shoe-formal'},
			
			
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
	const Card = ({products}) => {
		return (
		<Pressable onPress={() => navigation.navigate('DetailsScreen', products)}>	
			<View style={style.card}>
				<View style={style.iconContainer}>
					<Icon name="heart" type="material-community" size={15}  color={products.liked ? COLORS.red :COLORS.dark}/>
				</View>
				<Image 
					source={products.image} 
					style={{height: 170, width:'100%', borderRadius: 5}}
				
				/>
				<Text style={style.cardName}>{products.name}</Text>
				<View 
					style ={{
						marginTop:5,
						flexDirection:'row',
						justifyContent:'space-between',	
				}}>
					<Text style={style.price}> {products.price}</Text>
					<View style={{flexDirection:'row', alignItems:'center'}}>
						<Icon name="star" color={COLORS.yellow} size={18}/>
						<Text style={style.rating}>{products.rating}</Text>
					</View>
				</View>
			</View>
		</Pressable>
		);
		
		
	};

	const PopularCard = ({products}) =>{
		return (
			<View style={style.popularCard}>
				<View style={style.iconContainer}>
					<Icon name="heart" type="material-community" size={15}  color={products.liked ? COLORS.red :COLORS.dark}/>
				</View>
				<Image 
					source={products.image} 
					style={{
						width: 100,
						height: '100%',
						borderTopLeftRadius:10,
						borderBottomLeftRadius:10,
						marginRight: 10,
					}}
				/>
				<View style={{paddingVertical: 15, justifyContent: 'center'}}>
					<Text style={style.cardName}>{products.name}</Text>
					<View style={{flexDirection:'row', marginTop:10}}>

						<Text style={style.price}>{products.price}</Text>

						<View style={{flexDirection:'row', marginLeft:10}}>
							<Icon name="star" color={COLORS.yellow} size={18} />
							<Text style={style.rating}>{products.rating}</Text>
						</View>
					</View>
					
				</View>
			</View>		
		);
	};
	return (
	<SafeAreaView style={{backgroundColor: COLORS.white, flex:1}}>
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={style.header}>
				<Icon name="sort" size={28} color={COLORS.dark} />
				<Icon name="shopping-bag" type="sli" size={28} color={COLORS.dark} />
				
			</View>
			<Text style={style.headerTitle}>Explore Stores</Text>
			<View style={{
				flexDirection: 'row',
				justifyContent:'space-between',
				padding:20,
				}}>
					<View style={style.searchInputContainer}>
						<Icon name="search" color={COLORS.dark} size={25}/>
						<TextInput style={{marginLeft:20, width:'100%'}} placeholder="Search..."/>
					</View>
					<View style={style.sortBtn}>
						<Icon name="tune" color={COLORS.dark} size={25} />
						
					</View>
				</View>
				<Text style={style.title}>Categories</Text>
				<ListCategories />
				<Text style={style.title}>Recommended for You</Text>
				
				<FlatList
					contentContainerStyle={{paddingLeft: 2}} 
					horizontal
					showsHorizontalScrollIndicator={false}
					data={Object.values(products)}
					keyExtractor = {item => item.id}
					renderItem={({item}) => <Card products={item} />}
				/>
				<Text style={style.title}>Popular </Text>
				
				<FlatList
					contentContainerStyle={{paddingLeft: 2}} 
					horizontal
					showsHorizontalScrollIndicator={false}
					data={Object.values(products)}
					keyExtractor = {item => item.id}
					renderItem={({item}) => <PopularCard products={item} />}
				/>
				
		</ScrollView>		
	</SafeAreaView>
	);
	
};

const style = StyleSheet.create({

	iconContainer: {
		height: 25,
		width: 25,
		backgroundColor: COLORS.white,
		position:'absolute',
		right:15,
		top: 15,
		borderRadius: 15,
		justifyContent:'center',
		alignItems: 'center',
		elevation:2
	},
	popularCard: {
		height: 90,
		width: width -100,
		backgroundColor: COLORS.white,
		elevation: 10,
		marginVertical:20,
		flexDirection: 'row',
		borderRadius:10,
		marginRight: 10,
		marginLeft: 10,
	},
	rating: {
		fontWeight: 'bold',
		color: COLORS.grey,
		fontSize: 12,
	}, 
	price: {
		fontWeight:'bold',
		color: COLORS.grey,
		fontSize: 12,
	},
	cardName: {
		marginTop:10,
		fontSize:12,
		color: COLORS.dark,
		fontWeight: 'bold',
	},
	card: {
		height:240,
		backgroundColor: COLORS.white,
		elevation:10,
		width:width/2.5,
		marginRight: 10,
		marginLeft:10,
		padding:10,
		marginVertical:20,
		borderRadius:10,
	},
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