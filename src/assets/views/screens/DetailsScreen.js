import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView, ImageBackground} from 'react-native';
import COLORS from '../../consts/colors';
import {Icon, Button, SocialIcon} from 'react-native-elements';



const DetailsScreen = ({navigation, route}) => {
	const product = route.params;
	return (
		
		<SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
			<View style={style.header}>
				<View style={style.headerBtn}>
					<Icon name="chevron-left" type="material-community" size={25} onPress={navigation.goBack}/>
				</View>

				<Text style={{fontWeight: 'bold', fontSize: 18}}>Details</Text>
				<View style={style.headerBtn}>
					<Icon name="dots-vertical" type="material-community" size={25} />
				</View>
			</View>	
			<ScrollView showsVerticalScrollIndicator={false}>
				<ImageBackground 
					source={product.image} 
					style={style.backgroundImage}>
					<View style={style.productDialog}>
						<View style={{
							flexDirection:'row',
							alignItems:'center',
							marginBottom:5,	
						}}>
							<Icon name="star" color={COLORS.yellow} size={18}/>
							<Text style={{fontSize:10, color: COLORS.white, fontWeight:'bold'}}>
								{product.rating}
							</Text>
						</View>
						<Text style={{fontSize:9, color: COLORS.white, fontWeight:'bold'}}>280 Review</Text>
					</View>	
				</ImageBackground>

				<View style={style.detailsContainer}>
					<Text style={{fontSize:20, fontWeight:'bold', color:COLORS.dark}}>{product.name}</Text>
					<Text style={{marginVertical:20, fontSize:16, fontWeight:'bold', color:COLORS.dark}}>Description</Text>
					<Text>{product.description}</Text>

					<View style={{marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
						<Text style={{fontSize:22, color:COLORS.grey, fontWeight:'bold'}}>{product.price}</Text>
						<View style={style.quantityContainer}>
							<View style={style.quantityBtn}>
								<Icon name="plus" type="material-community" size={20}/>
							</View>
							<Text style={{color:COLORS.white, fontWeight:'bold'}}>1</Text>
							<View style={style.quantityBtn}>
								<Icon name="minus" type="material-community" size={20}/>
							</View>
						</View>
					</View>
					<View style={{flexDirection:'row', alignItems:'center'}}>
						<View style={style.heartIconConatainer}>
							<Icon name="heart-outline" color={COLORS.dark} size={28} type="material-community"/>
						</View>
						<View style={style.addToCartBtn}>
							<Text style={{color:COLORS.white}}>add to cart</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({

	header: {
		paddingVertical:20,
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		paddingHorizontal: 10,
	},
	headerBtn: {
		height: 50,
		width:50,
		backgroundColor: COLORS.white,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems:'center',
	},
	backgroundImage: {
		marginHorizontal: 20,
		height: 300,
		borderRadius: 15,
		overflow: 'hidden',
	},
	productDialog: {
		height: 60,
		width:70,
		backgroundColor: COLORS.dark,
		position:'absolute',
		bottom:0,
		right:0,
		justifyContent:'center',
		alignItems:'center',
		borderTopLeftRadius: 15,
		opacity:0.7
	},
	detailsContainer: {
		flex: 1,
		paddingHorizontal: 20,
		marginTop:40,
	},
	quantityContainer: {
		height:35,
		width:100,
		backgroundColor: COLORS.dark,
		borderRadius: 7,
		alignItems:'center',
		justifyContent:'space-between',
		flexDirection:'row',
	},
	quantityBtn: {
		height:25,
		width: 25,
		backgroundColor:COLORS.white,
		borderRadius:7,
		marginHorizontal: 5,
		justifyContent:'center',
		alignItems:'center'
	}, 
	heartIconConatainer: {
		height:50,
		width:50,
		elevation:7,
		marginRight:30,
		backgroundColor: COLORS.white,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:25,
	},
	addToCartBtn: {
		height: 50,
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor: COLORS.dark,
		borderRadius:10,
		paddingHorizontal:20,
		marginVertical:20
	}
});
export default DetailsScreen;