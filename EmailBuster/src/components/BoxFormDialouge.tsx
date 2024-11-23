import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { FormState, useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from './ui/input'


//zod schema

const FormSchema = z.object({
    newBoxName : z.string(),
    boxId : z.coerce.number()
})





function BoxFormDialouge(){

   
   
    //resolver
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver : zodResolver(FormSchema)
    });

    function onSubmit(data : z.infer<typeof FormSchema>){
        console.log(JSON.stringify(data));
    }


    return (
        <>
       
           <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="boxId"
                        render = {({field}) => (
                            <FormItem>
                                <FormLabel>Box</FormLabel>
                                <Select onValueChange={field.onChange} >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder=""/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem datatype='number' value="100">News Letter</SelectItem>
                                        <SelectItem  datatype='number' value="101">Reciept</SelectItem>
                                        <SelectItem datatype='number' value="102">Subscriptions</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>Select an existing box to move your emails to</FormDescription>
                                <FormMessage/> 
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="newBoxName"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>New Box</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter new box name" {...field} />
                                </FormControl>
                                <FormDescription>Enter the name of the new box here</FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Submit</Button>            
                </form>
           </Form>
        </>
    )
}


export default BoxFormDialouge;