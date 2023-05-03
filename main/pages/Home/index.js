import { View, StyleSheet, Button, Text, Image } from "react-native";

const Home = ({ navigation }) => {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#230000',
          alignItems: 'center',
          justifyContent: 'space-around',
        },
        title: {
            fontSize: 26,
            fontWeight: 'bold',
        },
        image: {
            height: 200,
            width: 300,
        }
      });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                GENIUS
            </Text>
            <Image
                style={styles.image}
                source={'https://static.wixstatic.com/media/fe6db5_15efd9a198d447d496b12e2528003949~mv2.png/v1/fill/w_402,h_402,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fe6db5_15efd9a198d447d496b12e2528003949~mv2.png'}
            />
            <Button title={'Play'} onPress={() => navigation.navigate('Game')} />
            <Button title={'Login'} onPress={() => navigation.navigate('LogIn')} />
        </View>
    )

}

export default Home