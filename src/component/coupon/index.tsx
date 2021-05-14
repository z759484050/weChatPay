import * as React from 'react';
import { View,Image,ScrollView,CoverImage} from 'remax/wechat';
import styles from './index.css';
import Scroll from '../scroll'
export default ()=>{
    const liRef =React.useRef<JSX.Element>()
    console.log(liRef)
    return <View className={styles.coupon}>
        <View>
            <View className={styles.contain}><Scroll ref={liRef}/></View>
            <Image src='/images/green.png' className={styles.image}></Image>
        </View>
    </View>
}