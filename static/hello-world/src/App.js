import React, { useState, useMemo } from 'react';
import './index.css';
import { Card } from './components/common/Card';
import { Button } from './components/common/Button';
import { Header } from './components/layout/Header';
import { Input } from './components/common/Input';
import { Modal } from './components/common/Modal';
import { Tabs } from './components/common/Tabs';
import {TaskForm} from './components/features/TaskForm';
import { Alert } from './components/common/Alert';
import { Select } from './components/common/Select';
import { Badge } from './components/common/Badge';

function App() {
  const [items, setItems] = useState([
    { id: 1, title: 'Tarea 1', status: 'Pendiente' },
    { id: 2, title: 'Tarea 2', status: 'En Progreso' },
    { id: 3, title: 'Tarea 3', status: 'Completada' },
  ]);
  const [name, setName] = useState('');
  const [cosa, setCosa] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [menu] = useState([
    { id: 1, title: 'Implementar login', status: 'Done' },
    { id: 2, title: 'Crear dashboard', status: 'In Progress' },
    { id: 3, title: 'Diseñar UI', status: 'To Do' },
  ]);
  const [priority, setPriority] = useState('');

  const filteredItems = useMemo(() => {
    return menu.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [menu, searchTerm]);

  const handleCreateTask = (formData) => {
    const newTask = {
      id: Date.now(),
      title: formData.title,
      status: 'Pendiente',
      description: formData.description
    };

    setItems([...items, newTask]);
    
    alert(`Tarea "${newTask.title}" creada con éxito!`);
  };

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Diseñar interfaz', status: 'done', priority: 'high' },
    { id: 2, title: 'Implementar componentes', status: 'progress', priority: 'medium' },
    { id: 3, title: 'Testing', status: 'todo', priority: 'low' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (formData) => {
    setTasks([...tasks, { id: Date.now(), ...formData, status: 'todo' }]);
    setIsModalOpen(false);
  };

  const statusColors = {
    done: 'green',
    progress: 'yellow',
    todo: 'gray'
  };

  const tabs = [
    {
      label: 'Resumen',
      content: (
        <div className="grid grid-cols-3 gap-4">
          <Card title="Total Tareas">
            <p className="text-3xl font-bold text-blue-600">{tasks.length}</p>
          </Card>
          <Card title="En Progreso">
            <p className="text-3xl font-bold text-yellow-600">
              {tasks.filter(t => t.status === 'progress').length}
            </p>
          </Card>
          <Card title="Completadas">
            <p className="text-3xl font-bold text-green-600">
              {tasks.filter(t => t.status === 'done').length}
            </p>
          </Card>
        </div>
      )
    },
    {
      label: 'Tareas',
      content: (
        <div className="space-y-4">
          <Button onClick={() => setIsModalOpen(true)} variant="primary">
            + Nueva Tarea
          </Button>
          {tasks.map(task => (
            <Card key={task.id}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">{task.title}</h3>
                  <Badge color={statusColors[task.status]} size="sm">
                    {task.status}
                  </Badge>
                </div>
                <Badge color="blue">{task.priority}</Badge>
              </div>
            </Card>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Mi App Forge" />
      
      <main className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-indigo-600">
            ¡Hola Forge + Tailwind!
          </h1>
          <p className="mt-4 text-gray-600">
            Mi primera app Custom UI.
          </p>
          <p className="mt-2 text-gray-500 text-sm">
            Ejercicio 1!
          </p>
        </div>

        <Card title="Mi Primera Card">
          <p className="text-gray-600 mb-4">
            Emocionado por mi primera card.
          </p>
          <p className="mt-2 text-gray-500 text-sm">
            Ejercicio 2!
          </p>
        </Card>

        <div className="flex justify-end border-t pt-4 mt-4">
          <Button variant="primary" onClick={() => alert('Guardado!')}>
            Guardar Cambios
          </Button>
        </div>

        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700 ml-1">Mis Tareas</h2>
            {items.map(item => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium 
                    ${item.status === 'Completada' ? 'bg-green-100 text-green-800' : 
                      item.status === 'En Progreso' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-blue-100 text-blue-800'}`}>
                    {item.status}
                  </span>
                </div>
              </Card>
            ))}
        </div>

        <Input 
          label="Nombre" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingresa tu nombre"
        />

        <Card title="Nueva Tarea">
           <TaskForm onSubmit={handleCreateTask} />
        </Card>

        <Card title="Prueba">
            <div className="space-y-4">
                <Input 
                    label="Nombre" 
                    value={cosa} 
                    onChange={(e) => setCosa(e.target.value)}
                    placeholder="Ingresa tu nombre"
                />

                <div>
                    <Button 
                        variant="secondary" 
                        onClick={() => setIsOpen(true)}
                    >
                        Abrir Modal de Prueba
                    </Button>
                </div>
            </div>
        </Card>

        <Modal 
            isOpen={isOpen} 
            onClose={() => setIsOpen(false)} 
            title="Nuevo Item"
        >
          <div className="space-y-4">
              <p className="text-gray-600">
                  Hola {cosa || 'Usuario'}, prueba exitosa.
              </p>
              <div className="flex justify-end space-x-2 mt-4">
                  <Button variant="secondary" onClick={() => setIsOpen(false)}>
                      Cancelar
                  </Button>
              </div>
          </div>
        </Modal>

        <Tabs tabs={[
          { label: 'Tab 1', content: <div>Contenido 1</div> },
          { label: 'Tab 2', content: <div>Contenido 2</div> },
        ]} />

        {showAlert && <Alert type="info" title="Información" onClose={() => setShowAlert(false)}>
          La tarea se guardó correctamente
        </Alert>}

        {showAlert && <Alert type="success" title="¡Éxito!" onClose={() => setShowAlert(false)}>
          La tarea se guardó correctamente
        </Alert>}

        {showAlert && <Alert type="warning" title="Cuidado" onClose={() => setShowAlert(false)}>
          La tarea se guardó correctamente
        </Alert>}

        {showAlert && <Alert type="error" title="Error" onClose={() => setShowAlert(false)}>
          La tarea se guardó correctamente
        </Alert>}

        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <Input
              placeholder="Buscar tareas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="mt-6 space-y-4">
              {filteredItems.map(item => (
                <Card key={item.id}>
                  <h3 className="font-semibold">{item.title}</h3>
                  <span className="text-sm text-gray-500">{item.status}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Select
          label="Prioridad"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          options={[
            { value: 'high', label: 'Alta' },
            { value: 'medium', label: 'Media' },
            { value: 'low', label: 'Baja' },
          ]}
        />

      </main>

      <div className="min-h-screen bg-gray-50">
        <Header title="Mi Dashboard Forge" />
        <main className="max-w-7xl mx-auto px-6 py-8">
          <Tabs tabs={tabs} />
        </main>
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          title="Nueva Tarea"
        >
          <TaskForm onSubmit={handleAddTask} />
        </Modal>
      </div>
    </div>

    
  );
}

export default App;