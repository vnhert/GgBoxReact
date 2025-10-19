// karma.conf.js

module.exports = function(config) {
  config.set({
    // Frameworks a usar: Jasmine
    frameworks: ['jasmine'],

    // Archivos que Karma debe cargar en el navegador para las pruebas
    files: [
      'src/**/*.spec.js' // 🎯 Le decimos que busque todos los archivos que terminen en .spec.js
    ],

    // Preprocesadores: transforman nuestro código antes de ejecutarlo
    preprocessors: {
      'src/**/*.spec.js': ['webpack']
    },

    // Configuración de Webpack para que entienda React (JSX)
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          // Añadimos una regla para poder importar imágenes en los tests
          {
            test: /\.(png|jpe?g|gif|avif)$/i,
            use: [{ loader: 'null-loader' }]
          }
        ]
      }
    },
    
    // Reporteros: cómo se muestran los resultados
    reporters: ['progress'],
    
    // Navegador en el que se ejecutarán las pruebas
    browsers: ['Chrome'],
    
    // Configuración adicional
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false, // Poner en 'true' para que se ejecute una sola vez
    concurrency: Infinity
  });
};