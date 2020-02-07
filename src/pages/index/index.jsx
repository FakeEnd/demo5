import { useState } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { useDispatch, useSelector } from "@tarojs/redux";
import { deleteList, add } from "../../actions/list";
import "./index.scss";

const Index = () => {
  const [thing, setthing] = useState('')
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);
  const click=()=>{
    dispatch(add(thing))
    setthing('')
  }

  return (
    <View className="index" style={{ float: "right" }}>
      <Input onChange={value => setthing(value.detail.value)} type='text' value={thing} placeholder="write someting" className="indexInput" />
      <Button type="primary" size="mini" onClick={click}>
        增加
      </Button>
      {list.map((item,index) => {
        return (
          <View key={item} className='listText'  >
            <Text> {item}</Text>
            <Button className='listbutton' onClick={()=>dispatch(deleteList(index))} >删除</Button>
          </View>
        )
      })}
    </View>
  );
};

export default Index;
