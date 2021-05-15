import * as React from 'react';
import { View, Image, ScrollView,Text,request,getMenuButtonBoundingClientRect,getSystemInfo} from 'remax/wechat';
import styles from './index.css';
import Coupon from '../../component/coupon'
import Model from '../../component/model'
import { usePageEvent } from 'remax/macro';
import UnderCoupon from '../../component/underCoupon'
import {underCouponData,couponData} from '../../mock/mock'
import NavBar from '../../component/navBar'
export default () => {
  const [arr, setArr] = React.useState<Array<object>>([])
  const [arr2, setArr2] = React.useState<Array<object>>([])
  const [isVisible, setIsVisible] = React.useState<boolean>(false)
  const [height,setHeight]=React.useState<number>(0)
  const [obj,setObj]=React.useState<object>({})
  React.useEffect(() => {
    setTimeout(()=>{
      setArr(couponData.data.list)
      setArr2(underCouponData.data.list)
    })
}, [])
  usePageEvent('onShow', () => {
    let menuButtonObject = getMenuButtonBoundingClientRect();
    getSystemInfo().then((res=>{
      let statusBarHeight = res.statusBarHeight
      let navTop = menuButtonObject.top//胶囊按钮与顶部的距离
      let navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;//导航高度
      setObj({
        top:navTop,
        height:navHeight,
        windowHeight:res.windowHeight
      })
    }))
    setTimeout(() => {
      setIsVisible(true)
      
    }, 1000)
  });

  

  return (
    <View className={styles.app}>
      <NavBar />
      <View className={styles.titles}></View>
      <View className={styles.header}>
        <Image
          src="/images/watsons.png"
          className={styles.watsons} />
        <Image
          src="/images/building.png"
          className={styles.building}
        />
      </View>
      <View className={styles.contain}>
        <View className={styles.title}>
          <View className={styles.titelLeft}>微信支付优惠券</View>
          <View className={styles.titleRight}>微信支付自动抵扣</View>
        </View>
        <View className={styles.Coupon}>
        {arr.map((item,index) => {
          return <Coupon key={index} data={item}/>
        })}
        </View>
        <View className={styles.title}>
          <View className={styles.titelLeft}>商户优惠券</View>
          <View className={styles.titleRight}>请向收银员出示使用优惠券</View>
        </View>
        <View className={styles.UnderCoupon}>
          {arr2.map((item,index) => {
            return <UnderCoupon  key={index} data={item}/>
          })}
        </View>
        <View className={styles.footer}><View className={styles.footerLeft}><Image src='/images/icon.png' className={styles.icon}/><Text>更多商家优惠</Text></View><Image src='/images/right.png' className={styles.right}/></View>
        <View><Text className={styles.footerText}>活动规则 | 联系客服</Text></View>
      </View>
     
      <Model isVisible={isVisible} setIsVisible={setIsVisible} />
    </View>
  );
};
