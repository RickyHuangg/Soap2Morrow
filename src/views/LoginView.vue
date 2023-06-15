<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";
import { auth, firestore } from "../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDoc, doc, setDoc } from "@firebase/firestore";

const store = useStore();
const router = useRouter();
const email = ref("");
const passwordOne = ref("");
const passwordTwo = ref("");

const registerViaEmail = async () => {
  if (passwordOne.value !== passwordTwo.value) {
    alert("Wrong Password");
    return;
  }

  const { user } = await createUserWithEmailAndPassword(
    auth,
    email.value,
    passwordOne.value
  );
  store.user = user;
  router.push("/purchase");
};

const loginViaEmail = async () => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      email.value,
      passwordOne.value
    );
    store.user = user;
    router.push("/purchase");
  } catch (error) {
    console.log(error);
  }
};

const registerViaGoogle = async () => {
  const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
  store.user = user;
  const cart = await getDoc(doc(firestore, "carts", user.email));

  if (cart.exists()) {
    store.cart = cart.data().cart;
  } else {
    await setDoc(doc(firestore, "carts", user.email), { cart: [] });
    store.cart = cart.data().cart;
  }
  router.push("/purchase");
};
</script>

<template>
  <div class="whole">
    <div class="auth-container">
      <div class="tit"><h1>Account Login</h1></div>
      <div class="Googleregist">
        <h1>Register via Google</h1>
        <button @click="registerViaGoogle()">Google</button>
      </div>
      <div class="Emailregist">
        <h1>Register via Email</h1>
        <form class="setup" @submit.prevent="registerViaEmail()">
          <input v-model="email" type="email" placeholder="email" />
          <input
            v-model="passwordOne"
            type="password"
            placeholder="Enter Password"
          />
          <input
            v-model="passwordTwo"
            type="password"
            placeholder="Re-enter Password"
          />
          <input type="submit" value="Register" />
        </form>
        <hr />
        <h1>Login via Email</h1>
        <form class="login" @submit.prevent="loginViaEmail()">
          <input v-model="email" type="email" placeholder="Email" />
          <input v-model="passwordOne" type="password" placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.whole {
  background-color: aquamarine;
  height: 100vh;
}
.tit {
  position: relative;
  left: 45%;
}
.Emailregist {
  position: relative;
  padding: 50px;
  background-color: #acc8e5;
  height: 50vh;
  border-radius: 20em;
  position: relative;
  left: 200px;
  top: 205px;
}

.Googleregist {
  padding: 50px;
  background-color: #acc8e5;
  height: 15vh;
  border-radius: 20em;
  position: relative;
  left: 200px;
  top: 325px;
}
.Googleregist button {
  width: 20em;
}
.auth-container {
  display: flex;
  gap: 5rem;
}

.setup,
.login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
