import React, { useState } from 'react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

export const TaskForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (field) => (e) => {
    
    const value = e.target.value; 

    setFormData(prev => ({
      ...prev,
      [field]: value 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
      <Input 
        label="Título" 
        value={formData.title}
        onChange={handleChange('title')}
        placeholder='Ingresa un título'
      />
      <Input 
        label="Descripción" 
        value={formData.description}
        onChange={handleChange('description')}
        placeholder='Ingresa un descripción'
      />
      <Button type="submit" variant="primary">
        Crear Tarea
      </Button>
    </form>
  );
};