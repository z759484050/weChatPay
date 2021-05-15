import * as React from 'react';
import { View,Image,ScrollView,CoverImage,Text} from 'remax/wechat';
import styles from './index.css';
interface CouponProps {
    data: any
}

const Contain=({ data }: CouponProps)=>{
    if(data.type==='exchangeRate'){
        return <View>
            <Image src={data.url} className={styles.image}></Image>
            <Text className={styles.name}>{data.name}</Text>
            <Text className={styles.explain}>{data.explain}</Text>
            <Text className={styles.under}>
                <Text className={styles.exchangeRate}>{data.exchangeRate}</Text>
                <Text className={styles.oldPrices}>市场参考价</Text><Text className={styles.oldPrice}>{data.oldPrice}</Text>
            </Text>
        </View>
    }else  if(data.type==='discount'){
        return <View>
           <Image src={data.url} className={styles.image}></Image>
           <Text className={styles.name}>{data.name}</Text>
           <Text className={styles.explain}>{data.explain}</Text>
           <Text className={styles.under}>
                <Text className={styles.number}>{data.number}张待解锁</Text>
                <Text className={styles.notes}>{data.notes}</Text>
            </Text>
        </View>
    }else {
        return  <View>
             <Image src={data.url} className={styles.image}></Image>
             <Text className={styles.price}>{data.price}</Text><Text className={styles.yuan}>元</Text>
             <Text className={styles.condition}>{data.condition}</Text>
             <Text className={styles.title}>{data.name}</Text>
           <Text className={styles.time}>{data.explain}</Text>
           <Text className={styles.unders}>{data.notes}</Text>
        </View>
    }
}
export default ({data}:CouponProps)=>{
    return <View className={styles.coupon}>
        <View>
            <Contain data={data}></Contain>
            
        </View>
    </View>
}