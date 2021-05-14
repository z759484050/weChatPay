import * as React from 'react'
import {View,ScrollView,Text,Swiper,SwiperItem} from 'remax/wechat'
import styles from './index.css'
export default React.forwardRef(()=>{
    const [li,setLi]=React.useState<Array<number>>([1,2,3,4,5,6,7,8,9])
    return <View>
        <Swiper>
        {li.map(item=>{
            return <SwiperItem key={item}><Text className={styles.text}>{item}</Text></SwiperItem>
        })}
        </Swiper>
    </View>
})