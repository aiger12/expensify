import React from 'react'; 
  import { View, Text, TouchableOpacity } from 'react-native'; 
   
  export default function ExpenseCard({ item, onModifyExpense, onDeleteExpense }) { 
    const handleModify = () => { 
      // Perform modification logic 
      const modifiedExpense = { ...item, amount: item.amount + 10 }; // Example modification 
      onModifyExpense(modifiedExpense); 
    }; 
   
    const handleDelete = () => { 
      // Perform deletion logic 
      onDeleteExpense(item); 
    }; 
   
    return ( 
      <View> 
        <Text>Title: {item.title}</Text> 
        <Text>Amount: {item.amount}</Text> 
        <Text>Category: {item.category}</Text> 
        <TouchableOpacity onPress={handleModify}> 
          <Text>Modify</Text> 
        </TouchableOpacity> 
        <TouchableOpacity onPress={handleDelete}> 
          <Text>Delete</Text> 
        </TouchableOpacity> 
      </View> 
    ); 
  }