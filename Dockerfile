# Node.js resmi imajını kullanarak başla
FROM node:16

# Çalışma dizini oluştur
WORKDIR /app

# Uygulama bağımlılıklarını kopyala
COPY package.json package-lock.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Uygulamayı çalıştıracak portu belirt
EXPOSE 5173

# Uygulamayı başlat
CMD ["npm", "run", "dev"]
