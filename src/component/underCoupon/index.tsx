import * as React from 'react'
import { View, Image, Text, loadFontFace, Button, request } from 'remax/wechat'
import styles from './index.css'

interface UnderCouponProps {
    data: any
}


const Contain=({ data }: UnderCouponProps)=>{
    if(data.type==='discount'){
        return <View className={styles.discount}>
            <Text className={styles.discountText}>{data.discount}</Text><Text className={styles.discountText2}>折</Text>
            <Text className={styles.discountCondition}>{data.condition}</Text>
        </View>
    }else  if(data.type==='gift'){
       
        return <View>
            <Image src={data.url} className={styles.gift}></Image>
            <Text className={styles.discountCondition}>{data.condition}</Text>
        </View>
    }else  if(data.type==='currency'){
        return <View>
             <Text className={styles.price}>{data.price}</Text><Text className={styles.priceName}>港币</Text>
            <Text className={styles.discountCondition}>{data.condition}</Text>
        </View>
    }else {
        return  <View>
              <Text className={styles.price}>{data.price}</Text><Text className={styles.priceName}>港币</Text>
           <View className={styles.oldPrices}><Text>原价</Text><Text className={styles.oldPice}>{data.oldPrice}港币</Text></View>

        </View>
    }
}


export default ({ data }: UnderCouponProps) => {
    console.log(data)
    return <View className={styles.imageBody}>
        <Image src='/images/Rectangle.png' className={styles.image}></Image>
        <View className={styles.titleBody}>
            <View className={styles.title}><Text >{data.title}</Text></View>
            <View className={styles.type}><Text >{data.name}</Text></View>
        </View>
        <Contain data={data}></Contain>
        <Button className={styles.button}>使用优惠</Button>
    </View>
}