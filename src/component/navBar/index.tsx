import * as React from 'react'
import { View, Image, ScrollView,Text,request,getMenuButtonBoundingClientRect,getSystemInfo} from 'remax/wechat';
import styles from './index.css';
import { usePageEvent } from 'remax/macro';
export default ()=>{

  const [obj,setObj]=React.useState<any>({})
  usePageEvent('onShow', () => {
    let menuButtonObject = getMenuButtonBoundingClientRect();
    getSystemInfo().then((res=>{
      let statusBarHeight = res.statusBarHeight
      let navTop = menuButtonObject.top//胶囊按钮与顶部的距离
      let navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;//导航高度
      setObj({
        top:navTop*2,
        height:navHeight*2,
        windowHeight:res.windowHeight
      })
    }))
    console.log(obj)
  });
  React.useEffect(() => {
    console.log(obj)
  }, [obj])
  // style={{height:{obj.height}px;background-color:{{bgColor}}}}
  return <View>
    <view className={styles.navbar}  style={{height:obj.height}}>
  <view  className={styles.navbartitle} style={{top:obj.top}}>
    <Text className={styles.title}>境外游礼包{obj.top}</Text>
  </view>
</view>
  </View>
}