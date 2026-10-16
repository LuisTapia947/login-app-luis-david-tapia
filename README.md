# Login App - Luis David Tapia

Aplicación web de inicio de sesión desarrollada como proyecto integrador para el Taller de Git y GitHub (Electiva de Integración y Agilidad Continua).

## Estrategia de Ramificación Elegida: GitHub Flow

Para este proyecto adoptamos la estrategia **GitHub Flow**. 

### Justificación de la elección:
1. **Despliegues continuos y ágiles:** Es un modelo ligero enfocado en aplicaciones web donde la rama principal (`main`) siempre se mantiene en un estado estable y desplegable.
2. **Ciclo de vida corto en ramas:** Las funcionalidades se desarrollan en ramas cortas (`feature/*`) que se integran rápidamente a `main` a través de Pull Requests.
3. **Integración con CI:** Facilita la automatización de pruebas con GitHub Actions en cada propuesta de cambio antes de realizar la fusión.