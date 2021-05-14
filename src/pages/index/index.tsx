import * as React from 'react';
import { View, Image, ScrollView,Text } from 'remax/wechat';
import styles from './index.css';
import Coupon from '../../component/coupon'
import Model from '../../component/model'
import { usePageEvent } from 'remax/macro';
import UnderCoupon from '../../component/underCoupon'
export default () => {
  const [arr, setArr] = React.useState<Array<number>>([1, 2, 3, 4])
  const [arr2, setArr2] = React.useState<Array<number>>([1, 2, 3, 4])
  const [isVisible, setIsVisible] = React.useState<boolean>(false)
  usePageEvent('onShow', () => {
    setTimeout(() => {
      setIsVisible(true)
    }, 1000)
  });

  return (
    <View className={styles.app}>
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
        {arr.map(item => {
          return <Coupon key={item} />
        })}
        </View>
        <View className={styles.title}>
          <View className={styles.titelLeft}>商户优惠券</View>
          <View className={styles.titleRight}>请向收银员出示使用优惠券</View>
        </View>
        <View className={styles.UnderCoupon}>
          {arr2.map(item => {
            return <UnderCoupon key={item} />
          })}
        </View>
        <View className={styles.footer}><View className={styles.footerLeft}><Image src='/images/icon.png' className={styles.icon}/><Text>更多商家优惠</Text></View><Image src='/images/right.png' className={styles.right}/></View>
        <View><Text className={styles.footerText}>活动规则 | 联系客服</Text></View>
      </View>
     
      <Model isVisible={isVisible} setIsVisible={setIsVisible} />
    </View>
  );
};
