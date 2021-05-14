import * as React from 'react'
import { View, Image, Text,loadFontFace,Button } from 'remax/wechat'
import styles from './index.css'


export default () => {



    return <View className={styles.imageBody}>
        <Image src='/images/Rectangle.png' className={styles.image}></Image>
        <View className={styles.titleBody}>
            <View className={styles.title}><Text >Hallmork Babies</Text></View>
            <View className={styles.type}><Text >新品折扣券</Text></View>
        </View>
        <Button className={styles.button}>使用优惠</Button>
    </View>
}