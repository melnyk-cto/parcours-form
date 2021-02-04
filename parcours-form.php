<!--This file using on wordpress https://renovationsolidaire.fr/primes -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/css/form.css">
    <title>Parcours</title>
</head>
<body>
<header class='header'>
    <a href="https://renovationsolidaire.fr/primes/">
        <img src='<?php echo get_stylesheet_directory_uri(); ?>/assets/images/form-images/logo.png' alt='logo'>
    </a>
    <p> Estimez votre Prime rénovation solidaire gratuitement pour vos travaux !</p>
</header>
<main class="wrapper">
    <section class="parcours">
        <div class="parcours-sidebar">
            <div class="sidebar-title">
                <h5>Votre demande de Prime rénovation solidaire en moins de 2 minutes</h5>
                <span></span>
            </div>
            <div class="sidebar-status">
                <div class="status-item first-step">Votre logement</div>
                <div class="status-item ">Votre projet travaux</div>
                <div class="status-item ">Vos informations</div>
                <div class="status-item ">Estimation de votre prime</div>
            </div>
        </div>
        <div class="parcours-form">
            <div class="form-progress">
                <a id='prev-btn' href="#" class="return"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/form-images/return.svg" alt=""> Retour</a>
                <div class="progress-line">
                    <span id='progress'></span>
                </div>
            </div>
            <?php echo do_shortcode('[contact-form-7 id="4294" title="Primes Form"]'); ?>
        </div>
    </section>
</main>
<script src='<?php echo get_stylesheet_directory_uri(); ?>/assets/js/form.js'></script>
</body>
</html>