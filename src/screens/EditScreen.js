import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

export default function EditScreen({ route,navigation }) {
    const { state,editBlogPost } = useContext(Context);
    const id = route.params.id;
    const item = state.find((item) => item.id === id);
  return (
    <BlogPostForm initialValue = {{title : item.title,content : item.content}} isEdit ={true} onSubmit={(title,content) => editBlogPost(id,title,content,() => navigation.pop())} />
  )
}

const styles = StyleSheet.create({})