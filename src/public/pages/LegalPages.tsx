import React from 'react';
import { useDemoConfig } from '../../hooks/useDemoConfig';

const LegalLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mx-auto max-w-4xl px-6 py-24">
    <h1 className="mb-12 font-serif text-4xl font-bold text-stone-800">{title}</h1>
    <div className="prose prose-stone max-w-none space-y-8 leading-relaxed text-stone-600">
      {children}
    </div>
  </div>
);

export const AvisoLegal = () => {
  const { propertyName, location: propertyLocation } = useDemoConfig();

  return (
    <LegalLayout title="Aviso Legal">
      <section>
        <h2 className="mb-4 text-xl font-bold text-stone-800">1. Datos Identificativos</h2>
        <p>
          En cumplimiento con el deber de información recogido en artículo 10 de la Ley
          34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del
          Comercio Electrónico, a continuación se reflejan los siguientes datos: la empresa
          titular de dominio web es {propertyName} (en adelante {propertyName}), con
          domicilio a estos efectos en {propertyLocation}. Correo electrónico de contacto:
          info@larasilla.com.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold text-stone-800">2. Usuarios</h2>
        <p>
          El acceso y/o uso de este portal de {propertyName} atribuye la condición de
          USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso
          aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de
          las Condiciones Generales de Contratación que en su caso resulten de obligado
          cumplimiento.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold text-stone-800">3. Uso del Portal</h2>
        <p>
          www.larasilla.com proporciona el acceso a multitud de informaciones, servicios,
          programas o datos (en adelante, &quot;los contenidos&quot;) en Internet
          pertenecientes a La Rasilla o a sus licenciantes a los que el USUARIO pueda tener
          acceso. El USUARIO asume la responsabilidad del uso del portal. Dicha
          responsabilidad se extiende al registro que fuese necesario para acceder a
          determinados servicios o contenidos.
        </p>
      </section>
    </LegalLayout>
  );
};

export const PoliticaPrivacidad = () => {
  const { propertyName } = useDemoConfig();

  return (
    <LegalLayout title="Política de Privacidad">
      <section>
        <h2 className="mb-4 text-xl font-bold text-stone-800">1. Protección de Datos</h2>
        <p>
          {propertyName} cumple con las directrices de la Ley Orgánica 15/1999 de 13 de
          diciembre de Protección de Datos de Carácter Personal, el Real Decreto 1720/2007
          de 21 de diciembre por el que se aprueba el Reglamento de desarrollo de la Ley
          Orgánica y demás normativa vigente en cada momento, y vela por garantizar un
          correcto uso y tratamiento de los datos personales del usuario.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold text-stone-800">2. Finalidad del Tratamiento</h2>
        <p>
          Los datos personales recogidos a través de los formularios de la web serán
          incorporados a un fichero automatizado con la finalidad de gestionar las reservas,
          responder a consultas y enviar información comercial si el usuario así lo autoriza.
        </p>
      </section>
    </LegalLayout>
  );
};

export const PoliticaCookies = () => (
  <LegalLayout title="Política de Cookies">
    <section>
      <h2 className="mb-4 text-xl font-bold text-stone-800">¿Qué son las cookies?</h2>
      <p>
        Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas
        páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y
        recuperar información sobre los hábitos de navegación de un usuario o de su equipo.
      </p>
    </section>

    <section>
      <h2 className="mb-4 text-xl font-bold text-stone-800">Tipos de cookies utilizadas</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Cookies técnicas: Necesarias para el funcionamiento de la web y el motor de
          reservas.
        </li>
        <li>
          Cookies de análisis: Permiten cuantificar el número de usuarios y realizar la
          medición y análisis estadístico.
        </li>
      </ul>
    </section>
  </LegalLayout>
);

export const RGPD = () => {
  const { propertyName } = useDemoConfig();

  return (
    <LegalLayout title="RGPD - Protección de Datos">
      <section>
        <h2 className="mb-4 text-xl font-bold text-stone-800">
          Información Básica sobre Protección de Datos
        </h2>
        <div className="space-y-4 rounded-xl border border-stone-200 bg-stone-50 p-6">
          <p>
            <strong>Responsable:</strong> {propertyName}
          </p>
          <p>
            <strong>Finalidad:</strong> Gestión de reservas y comunicación con clientes.
          </p>
          <p>
            <strong>Legitimación:</strong> Ejecución de un contrato y consentimiento del
            interesado.
          </p>
          <p>
            <strong>Destinatarios:</strong> No se cederán datos a terceros, salvo obligación
            legal.
          </p>
          <p>
            <strong>Derechos:</strong> Acceso, rectificación, supresión y otros derechos
            detallados en la política de privacidad.
          </p>
        </div>
      </section>
    </LegalLayout>
  );
};

export const CondicionesReserva = () => (
  <LegalLayout title="Condiciones de Reserva">
    <section>
      <h2 className="mb-4 text-xl font-bold text-stone-800">1. Proceso de Reserva</h2>
      <p>
        La reserva se realiza íntegramente a través de nuestra web oficial. El cliente
        recibirá una confirmación inmediata tras el pago de la señal o el total de la
        reserva según la tarifa elegida.
      </p>
    </section>

    <section>
      <h2 className="mb-4 text-xl font-bold text-stone-800">2. Capacidad y Normas</h2>
      <p>
        La casa tiene una capacidad base de 10 personas, ampliable a 11 bajo suplemento. No
        se permite la estancia de más personas de las declaradas en la reserva.
      </p>
    </section>

    <section>
      <h2 className="mb-4 text-xl font-bold text-stone-800">3. Horarios</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Check-in: A partir de las 16:00h.</li>
        <li>Check-out: Antes de las 12:00h.</li>
      </ul>
    </section>
  </LegalLayout>
);

export const PoliticaCancelaciones = () => (
  <LegalLayout title="Política de Cancelaciones">
    <section>
      <h2 className="mb-4 text-xl font-bold text-stone-800">Tarifa Flexible</h2>
      <p>Las cancelaciones en tarifa flexible se rigen por los siguientes plazos:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Más de 60 días antes de la llegada: Reembolso del 100%.</li>
        <li>Entre 45 y 59 días antes: Reembolso del 50%.</li>
        <li>Entre 30 y 44 días antes: Reembolso del 25%.</li>
        <li>Menos de 30 días antes: Sin reembolso.</li>
      </ul>
    </section>

    <section>
      <h2 className="mb-4 text-xl font-bold text-stone-800">Tarifa No Reembolsable</h2>
      <p>
        Esta tarifa no admite cancelaciones, cambios ni devoluciones bajo ninguna
        circunstancia. El importe total se abona en el momento de la reserva.
      </p>
    </section>
  </LegalLayout>
);