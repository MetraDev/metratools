import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title="Welcome" subheader="September 14, 2016" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Lo primero gracias por pasarte! Os contare un poco mi historia para
          los que os interese.. Puedo empezar contando cuando naci, de donde soy
          y cuantos anos tengo.. pero creo que para que me conozcais mejor os
          contare como y porque emepece a programa
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Como programar cambio mi vida:</Typography>
          <Typography paragraph>
            Para esto debemos vovler a 2016, ahi estaba yo sin terminar
            Bachiller y sin ganas de estudiar porque no habia nada que realmente
            me gustase Empece a trabajar en un cine y termine saliendo todos los
            fines de semana(y entre semana) y gastandome dinero que no tenia.
            Esto me sirvio para perder el norte y perder personas que me
            importaban, pero tambien para encontrarme.
          </Typography>
          <Typography paragraph>
            Un dia, uno de muchos en los que no hacia nada compre un curso
            online de Hacking etico, en el que descubri HTML y CSS eso y the
            social network me llevo a apuntarme un curso de Java de desarrollo
            en Android(En una uni), y otros 2 mas..
          </Typography>
          <Typography paragraph>
            Parecen cursos sin mas, pero para poneros en situacion yo llevaba
            sin ir a clase 3 anos y lo unico que hacia era ver series y salir...
            Ademas iba a clase con ingenieros, arquitectos y luego estaba yo que
            no sabia ni para que sirve el control Z Fueron dias duros, sobretodo
            el primero que dimos desde lo que es una variable a herencia y
            polimorfismo(Autentica locura), me sangraban los ojos y me exploto
            el cerebro pero la sensacion de resolver un problema despues de
            horas intentandolo fue unica, esa sensacion que a dia de hoy sigo
            buscando continuamente.
          </Typography>
          <Typography paragraph>
            Estos cursos me llevaron a replantearme que hacer con mi vida, no
            tenia ni idea de programar, no sabia si se me iba a dar bien, ni si
            me iba gustar y desde luego si podia trabajar de ello sin siquiera
            tener bachillerato Solo tenia una cosa clara queria sentir todos los
            dias la sensacion que senti cuando resolvi mi primer problema.
          </Typography>
          <Typography paragraph>
            Asi que, sin nada de dinero ahorrado y con muchas deudas decidi
            dejar el cine, por que ? porque sabia que si no lo dejaba, no iba a
            cambiar nunca, te entra dinero mes a mes.. te acomodas.. necesitaba
            salir de mi zona de confort Estuve buscando trabajo sin exito y
            buscando la manera de seguir estudiando 'programacion', me
            rechazaron en varios sitios(Por estudios o por que costaban mucho
            dinero) pero al final encontre oro.
          </Typography>
          <Typography paragraph>
            Me seleccionaron para un proceso de formacion intensiva de 2 meses
            con opcion a contrato indefinido (si la empresa finalmente le
            gustaba tu perfil..) Yo estaba flipando pero te pedian 300 euros
            como fianza, dinero que yo no tenia y tuve que pedir a mi madre
            despues de deberle mucho (Ademas ella estaba pagando mis deudas) y
            haber tenido infinidad de discusiones y mucho disgustos(Tiene ganado
            el cielo desde luego)
          </Typography>
          <Typography paragraph>
            El 8 de enero de 2019 empezamos el bootcamp, fueron los 2 meses mas
            intensos de mi vida, una locura, mucha presion, mucho que aprender y
            la situacion no era sencilla. En casa eramos muchos y no habia casi
            espacio, tenia una silla rota que caundo me sentaba se me clavaba un
            tornillo en el culo(Va enserio, imaginaos 8h programando ahi) Para
            poneros in situ ese bootcamp era mi all in, seguia debiendo dinero y
            sin trabajo asi que me lo curre como no me habia currado nada en mi
            vida, con la presion de las entregas, la presion en casa y la
            presion de una empresa haciendo seguimiento de tu proyecto
            Finalmente salio bien, aprendi a programar y consegui el trabajo.
            Programar me cambio la vida, hizo un hobby una profesion y como dijo
            un buen amigo mio, sino trabajase de esto lo haria igual.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
