interface ImageBannerProps {
  imgUrl: string;
  title: string;
  subtitle: string;
}

interface OutlineProps {
  outline: string[];
  imgObj?: {
    imgs: {
      imgUrl: string;
      imgText: string;
    }[];
  };
}

interface ProductTextImageBoxProps {
  title?: string;
  contents?: string[];
  width?: string;
  height?: string;

  imgObj?: {
    imgs: {
      imgUrl: string;
      imgText?: string;
      imgWidth?: string;
    }[];
    imgLayout?: string;
    imgPosition?: string;
  };
}

type LocalizedIMOVA = {
  page_name: string;
  name: string;
  title: string;
  main_image: string;
  main_image_alt: string;
  title_image: string;
  title_image_alt: string;
  top_video: string;
  section_titles: {
    main_function: string;
    control_system: string;
    use_case: string;
  };
  main_function: {
    function_title: string;
    function_description: string;
    function_image_url: string;
    function_image_alt: string;
  }[];
  control_system: {
    control_system_topic: string;
    control_system_description: string;
    control_system_image_url: string;
    control_system_image_alt: string;
  }[];
  production_line: {
    production_line_title: string;
    production_line_image_url: string;
    production_line_image_url2: string;
    production_line_list: {
      production_line_topic: string;
      production_line_description: string;
      production_line_color: string;
      position: Record<string, string>;
    }[];
  };
  technology_spec: IMOVATechnologySpec;
};

type IMOVATechnologySpec = {
  technology_spec_title: string;
  technology_spec_products: {
    product: string;
    product_standard: {
      color: string;
      size: string;
      weight: string;
      box_size: string;
    };
    performance: {
      max_load: string;
      speed: string;
      motor_performance: string;
      motor_rated_output: string;
      permitted_step: string;
      permitted_gap_width: string;
      max_inclination_angle: string;
      noise: string;
    };
    electrical: {
      input_voltage: string;
      output_voltage: string;
      input_voltage_battery: string;
      capacity: string;
      permitted_voltage: string;
    };
    environment: {
      ip_rating: string;
      wifi_frequency: string;
      wifi_current: string;
    };
    battery: {
      lifespan: string;
      charging_time: string;
    };
    environmental_monitoring: {
      temperature: {
        range: string;
        accuracy: string;
      };
      humidity: {
        range: string;
        accuracy: string;
      };
      dust: {
        particle_size: string;
        concentration_range: string;
        accuracy: string;
      };
      camera: {
        sensor: string;
        resolution: string;
      };
    };
  }[];
  technology_spec_application: string;
  technology_spec_sub: string;
  labels: {
    tech_spec: string;
    product_standard: string;
    color: string;
    size: string;
    weight: string;
    box_size: string;
    performance: string;
    max_load: string;
    speed: string;
    motor_performance: string;
    motor_rated_output: string;
    permitted_step: string;
    permitted_gap_width: string;
    max_inclination_angle: string;
    noise: string;
    electrical: string;
    input_voltage: string;
    output_voltage: string;
    input_voltage_battery: string;
    capacity: string;
    permitted_voltage: string;
    environment: string;
    ip_rating: string;
    wifi_frequency: string;
    wifi_current: string;
    battery: string;
    lifespan: string;
    charging_time: string;
    environmental_monitoring: string;
    temperature_range: string;
    temperature_accuracy: string;
    humidity_range: string;
    humidity_accuracy: string;
    dust_particle_size: string;
    dust_concentration_range: string;
    dust_range: string;
    camera_sensor: string;
    camera_static_resolution: string;
    application: string;
  };
};

export type {
  ImageBannerProps,
  OutlineProps,
  ProductTextImageBoxProps,
  LocalizedIMOVA,
  IMOVATechnologySpec,
};
