<script lang="ts">
  // Firebase config
  import { initializeApp } from "firebase/app";
  import firebaseConfig from "./firebaseConfig";
  
  const app = initializeApp(firebaseConfig);
  
  // Real code

  // Importing stuff
  import Home from "./Home.svelte";

  import { onMount } from "svelte";

  // Smooth scroll
  import smoothLoadAnimationAdder from "./smoothLoad";

  onMount(() => {
    setInterval(() => {
      smoothLoadAnimationAdder("animated");
    }, 0);
  });

  // Go to Login / Signup code
  let currentlyAt: string;
  const GoToLogin: () => void = () => {
    document.querySelectorAll(".about").forEach(aboutElement => aboutElement.remove());
    currentlyAt = "login";
  }
  
  const GoToSignup: () => void = () => {
    document.querySelectorAll(".about").forEach(aboutElement => aboutElement.remove());
    currentlyAt = "signup";
  }
</script>

<h1 class="animated">Welcome to DigitalNotebook!</h1>
<br class="about"><br class="about"><br class="about"><br class="about"><br class="about">

<Home elementClass="animated about" />
<br>
{#if currentlyAt === "login"}
  <p>Logging in</p>
{:else if currentlyAt === "signup"}
  <p>Signing up</p>
{/if}
<button class="animated" style="transition-delay: 8s;" on:click={GoToSignup}>Sign up</button>
<button class="animated" style="transition-delay: 8s;" on:click={GoToLogin}>Log in</button>