
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Box, Heading, Text } from '@chakra-ui/react';

const LoginForm = ({ onLogin }) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    // Procesar datos de inicio de sesión
    onLogin(data);
  };

  return (
    <Box maxW="400px" mx="auto">
      <Heading as="h2" mb="4">
        Iniciar sesión
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Nombre"
              mb="4"
              required
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              type="email"
              placeholder="Correo electrónico"
              mb="4"
              required
            />
          )}
        />
        <Button type="submit" colorScheme="blue">
          Ingresar
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
