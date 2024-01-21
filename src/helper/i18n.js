import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const localePaths = {
    en: '../../public/locales/en/translation.json',
    tr: '../../public/locales/tr/translation.json',
};


const resources = {
    en: {
        translation: {
            welcome: "Welcome Json",
            change_lang: "Change lang",
            logout: "LogOut",
            language_used_english: "Language Used English",
            language_used_turkish: "Language Used Turkish",
            Notification_close: "Notification will close in 2 seconds, you can close this notification now",
            Success: "Success",
            Unsuccessful: "Operation Failed",
            Please_wait: "Please Wait",
            Active_language: "Active Language",
            Submit: "Submit",
            Cancel: "Cancel",
            films: "Films",
            series: "Series",
            persons: "Persons",
            see_more: "See More",
            language_settings:"Language Settings",
            default_language:"Default Language",
            return_language:"Return Language",
            refresh_page:"Refresh Page",
            login_account: "Login to Your Account",
            login_account_text: "In order to use TMDb's editing and voting functions and to receive personalized recommendations, you must log in to your account. If you do not have a TMDB account yet, you can easily become a member for free. Click to get started.",
            login_account_email: "If you have registered but have not received a confirmation email, click here to receive a confirmation email again.",
            login_username:"User Name",
            login_password:"Password",
            login:"Login",
            password_confirmation:"Password Confirmation",
            email:"Email",
            reset_password:"Reset Password",
            sign:"Sign up for an account",
            sign_text:"Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.",
            sign_click:"By clicking the \"Sign up\" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.",
            benefits_member : "Benefits of Being a Member",
            sign_up : "SigUp",
            create_account : "Create Account",
            sing_up_first:"Find something to watch on your subscribed streaming services",
            sing_up_second:"Save the movies and TV shows you watch",
            sing_up_third:"Keep track of your favorite movies and TV shows and get recommendations from them",
            sing_up_fifth:"Create and maintain a personal watch list",
            sing_up_sixth:"Create custom mixtapes (movies & TV)",
            sing_up_seventh:"Join film and TV discussions",
            sing_up_fourty:"Contribute and improve the information in our database",
            input_empty:"input value is empty"
        },
    },
    tr: {
        translation: {
            hello: 'Merhaba',
            welcomeMessage: 'Uygulamama hoş geldiniz!',
            welcome: "Hoş geldiniz Json",
            change_lang: "Dili Değiştir",
            logout: "Çıkış",
            language_used_english: "Kullanılan Dil İngilizce",
            language_used_turkish: "Kullanılan Dil Türkçe",
            Notification_close: "Bildirim 2 saniye içinde kapanacak, bu bildirimi şimdi kapatabilirsiniz",
            Success: "İşlem Başarıyla Gerçekleştirildi",
            Unsuccessful: "Operation Failed",
            Please_wait: "Lütfen Bekleyiniz",
            Active_language: "Aktif Dil",
            Submit: "Gönder",
            Cancel: "Vazgeç",
            films: "Filmler",
            persons: "Kişiler",
            see_more: "Daha Fazla",
            language_settings:"Dil Ayarları",
            default_language:"Varsayılan Dil",
            return_language:"Geri Dönüş Dili",
            refresh_page:"Sayfayı Yenile",
            login_account: "Hesabına Gir",
            login_account_text: "TMDb'nin düzenleme ve oy verme işlevlerini kullanabilmek ve size özel tavsiyeler alabilmek için hesabınıza giriş yapmanız gerekmektedir. Eğer henüz bir TMDB hesabınız yoksa, kolayca ücretsiz üye olabilirsiniz. Başlamak için tıklayın",
            login_account_email: "Eğer kayıt olduğunuz halde onay epostası size ulaşmadıysa tekrar onay epostası almak için buraya tıklayın",
            login_username:"Kullanıcı Adı",
            login_password:"Şifre",
            password_confirmation:"Şifre Onaylama",
            email:"Email",
            login:"Giriş",
            reset_password:"Şifreyi Sıfırla",
            sign:"Bir hesap için kaydolun",
            sign_text:"Bir hesaba kaydolmak ücretsiz ve kolaydır. Başlamak için aşağıdaki formu doldurun.",
            sign_click:"Aşağıdaki \"Kayıt Ol\" düğmesini tıklayarak, TMDB kullanım şartlarını ve gizlilik politikasını okudum ve kabul ettiğimi onaylıyorum.",
            benefits_member : "Üye Olmanın Faydaları",
            sign_up : "Üye Ol",
            create_account : "Hesap Oluştur",
            sing_up_first:"Abone olduğunuz yayın hizmetlerinde izleyecek bir şeyler bulun",
            sing_up_second:"İzlediğiniz filmleri ve TV şovlarını kaydetme",
            sing_up_third:"En sevdiğiniz filmleri ve TV şovlarını takip edin ve bunlardan öneriler alın",
            sing_up_fifth:" Kişisel bir izleme listesi oluşturun ve sürdürün",
            sing_up_sixth:"Özel karışık listeler oluşturun (filmler ve TV)",
            sing_up_seventh:" Film ve TV tartışmalarına katılın",
            sing_up_fourty:"Veritabanımızdaki bilgileri katkıda bulun ve geliştirin",
            input_empty:"Lütfen Bilgilerinizi Giriniz."
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });


export default i18n