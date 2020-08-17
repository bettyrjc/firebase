# Tarea

Bloquear el botón de login cuando está en el proceso de autenticación.

Pasos:

1. Crear dos tipos en nuestros types.js
    uiStartLoading: '[UI] Start loading'
    uiFinishLoading: '[UI] Finish loading'

2. Crear dos acciones que modifiquen nuestro state en el uiReducer (no reciben argumentos)
    uiStartLoading: debe de colocar la propiedad loading en true 
    uiFinishLoading: debe de colocar la propiedad loading en false

    Esas acciones tendrán el nombre de startLoading y finishLoading respectivamente

3. Las acciones de startLoading y finishLoading serán despachadas únicamente en la acción:
    startLoginEmailPassword
        Tan pronto la acción es creada, debe de disparar la acción de startLoading
        Cuando se resuelve la petición de Firebase de autenticación con éxito o error, deben de
        disparar la acción finisLoading

4. En el <LoginScreen />, deben de bloquear el botón de Login, añadiendo la propiedad:
    disabled={ loading }

    Donde loading es la propiedad del state ui.loading.


5. Mucha suerte!