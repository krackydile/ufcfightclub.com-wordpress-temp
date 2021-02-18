const path = require('path');
// Including our UglifyJS
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	watch: true,
  	// entry: './js/src/index.js',
  	entry: ['./js/src/index.js', './css/src/app.scss'],
  	//
  	output: {
    	filename: './js/dist/app.js',
    	path: path.resolve(__dirname)
  	},
  	module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
		 	test: /\.scss$/,
		  	use: [{
		  		loader: MiniCssExtractPlugin.loader
		  	},
		  	// {
		       // loader: "style-loader" // creates style nodes from JS strings
		    //},
		    {
		        loader: "css-loader" // translates CSS into CommonJS
		    }, {
		        loader: "sass-loader" // compiles Sass to CSS
		    }]
		},
        // Our new rules
	  	{
		    test: /\.css$/,
		    loader: 'style-loader',
	  	},
	  	{
		    test: /\.css$/,
		    loader: 'css-loader',
		    options: {
		      minimize: true
		    }
	  	},
	  	{
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              	name: '[name].[ext]',
              	publicPath: './wp-content/themes/sparkart/fonts/',
				outputPath: 'fonts/'
            }
          }
        ]
      }
      ]
    },
    externals: {
	  jquery: 'jQuery'
	},
    plugins: [
    // extract css into dedicated file
	    new MiniCssExtractPlugin({
	      filename: './css/build/main.min.css'
	    })
	],
    optimization: {
		minimizer: [
			// new OptimizeCssAssetsPlugin( {
			// 	cssProcessor: cssnano
			// } ),
			new UglifyJsPlugin( {
				cache: false,
				parallel: true,
				sourceMap: false
			} )
		]
	},
};
