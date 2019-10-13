# CAPTCHA SERVICE
A light Captcha Service to verify the user is a human or bot. 

## REQUIREMENTS
node>=10.16.0 && npm>=6.9.0 && redis

## INSTALLATION AND USAGE
First download and install GraphicsMagick or ImageMagick. 
### In Mac OS
```
brew install imagemagick
brew install graphicsmagick
```
### In linux 
```
wget https://www.imagemagick.org/download/ImageMagick.tar.gz
tar xvzf ImageMagick.tar.gz
./ImageMagick-7.0.8-68/
./configure
make
make install
make check
ldconfig /usr/local/lib

wget https://nchc.dl.sourceforge.net/project/graphicsmagick/graphicsmagick/1.3.33/GraphicsMagick-1.3.33.tar.gz
tar xvzf GraphicsMagick-1.3.33.tar.gz
GraphicsMagick-1.3.33
./configure
make
make install
make check
ldconfig /usr/local/lib
```
### start the service
```js
npm install 
npm start
```

## API

### Generate Captcha
Generates the image captcha.

<b>Endpoint</b> /v1/image/captcha <br>
<b>Query params</b> Token

### Verify Captcha
Verify the text of captcha.

<b>Endpoint</b> /v1/validate/image/captcha <br>
<b>Body</b> token , text </br>
<b>Response</b> data -> true/false 