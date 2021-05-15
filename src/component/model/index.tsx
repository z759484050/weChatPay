import * as React from 'react'
import { View, CoverView, Image, Button, Text} from 'remax/wechat'
import styles from './index.css'

interface modelProps {
    isVisible: boolean,
    setIsVisible: (val: boolean) => void
}


export default ({ isVisible, setIsVisible }: modelProps) => {
    const [step,setStep]=React.useState<number>(1)

    const handleClick=()=>{
        if(step===1){
            setStep(step+1)
        }else{
            setIsVisible(false)
            setStep(1)
        }
    }
    return isVisible ? <View className={styles.contain} catchTouchMove={()=>{
        return
    }}>
        <View className={styles.center}>

        <Text className={styles.text}>恭喜你获得:</Text>
        <View className={styles.imageBody}> 
            <Image src={step===1?"/images/Model1.0.png":"/images/step2.png"} className={styles.image}></Image>
            <Text className={styles.imageTitle}>微信支付</Text>
            <Text className={styles.imageTitle2}>超优汇率券</Text>
            <Text className={styles.imageText}>境外线下门店支付时，每单都可享受微信支付超优汇率，生效期7天</Text>
            <View className={styles.exChangeRate}>
                <View>
                    <Text className={styles.hkDollar}>100港币=</Text><Text className={styles.rmb}>85.51人民币</Text>
                    <View className={styles.line}></View>
                    <Text className={styles.reference}>市场参考价</Text><Text className={styles.price}>85.80人民币</Text>
                </View>
            </View>   
        </View>
        <Button onClick={handleClick} className={styles.button} >{step===1?'点击领取下一张':'领取更多'}</Button>
        </View>
       
    </View> : null
}