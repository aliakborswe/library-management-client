/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "@/redux/api/baseApi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router";
import { Bounce, toast } from "react-toastify";
import { bookSchema } from "@/utils/bookSchema";
import type z from "zod";
import Wrapper from "@/components/common/Wrapper";
import { useEffect } from "react";
import type { IBook } from "@/utils/types";

export default function UpdateBook() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetBookByIdQuery(id, {
    pollingInterval: 30000,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      description: "",
      author: "",
      isbn: "",
      genre: "FICTION",
      copies: 0,
      imageUrl: "",
    },
  });

  useEffect(() => {
    if (data && data.data) {
      form.reset({
        title: data.data?.title || "",
        description: data.data?.description || "",
        author: data.data?.author || "",
        isbn: data.data?.isbn || "",
        genre: data.data?.genre || "FICTION",
        copies: data.data?.copies || 0,
        imageUrl: data.data?.imageUrl || "",
      });
    }
  }, [data, form]);

  const [updateBook] = useUpdateBookMutation();

  async function onSubmit(data: z.infer<typeof bookSchema>) {
    try {
      const updateBookData = {
        ...data,
        _id: id,
      };
      const res = await updateBook(updateBookData as IBook).unwrap();
      toast.success(res.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      });
      form.reset();
      navigate("/all-books");
    } catch (err: any) {
      toast.error(err.message);
    }
  }

  return (
    <Wrapper>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 max-w-3xl mx-auto rounded-md p-5'
        >
          <h1 className='text-2xl font-bold text-center mb-4'>Update book</h1>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder='Title' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='author'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder='Author' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder='Description' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='isbn'
            render={({ field }) => (
              <FormItem>
                <FormLabel>ISBN</FormLabel>
                <FormControl>
                  <Input placeholder='ISBN' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='genre'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Genre</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl className='w-full'>
                    <SelectTrigger>
                      <SelectValue placeholder='Select genre' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='FICTION'>FICTION</SelectItem>
                    <SelectItem value='NON_FICTION'>NON_FICTION</SelectItem>
                    <SelectItem value='SCIENCE'>SCIENCE</SelectItem>
                    <SelectItem value='HISTORY'>HISTORY</SelectItem>
                    <SelectItem value='BIOGRAPHY'>BIOGRAPHY</SelectItem>
                    <SelectItem value='FANTASY'>FANTASY</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='copies'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Copies</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='Copies'
                    value={field.value}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='imageUrl'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Image URL <span className='text-muted'>(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder='Image URL' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='cursor-pointer w-full'>
            Update
          </Button>
        </form>
      </Form>
    </Wrapper>
  );
}
