# coding: utf-8

"""
    zrok

    zrok client access  # noqa: E501

    OpenAPI spec version: 1.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

import pprint
import re  # noqa: F401

import six

class InlineResponse2004Members(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'email': 'str',
        'admin': 'bool'
    }

    attribute_map = {
        'email': 'email',
        'admin': 'admin'
    }

    def __init__(self, email=None, admin=None):  # noqa: E501
        """InlineResponse2004Members - a model defined in Swagger"""  # noqa: E501
        self._email = None
        self._admin = None
        self.discriminator = None
        if email is not None:
            self.email = email
        if admin is not None:
            self.admin = admin

    @property
    def email(self):
        """Gets the email of this InlineResponse2004Members.  # noqa: E501


        :return: The email of this InlineResponse2004Members.  # noqa: E501
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email):
        """Sets the email of this InlineResponse2004Members.


        :param email: The email of this InlineResponse2004Members.  # noqa: E501
        :type: str
        """

        self._email = email

    @property
    def admin(self):
        """Gets the admin of this InlineResponse2004Members.  # noqa: E501


        :return: The admin of this InlineResponse2004Members.  # noqa: E501
        :rtype: bool
        """
        return self._admin

    @admin.setter
    def admin(self, admin):
        """Sets the admin of this InlineResponse2004Members.


        :param admin: The admin of this InlineResponse2004Members.  # noqa: E501
        :type: bool
        """

        self._admin = admin

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(InlineResponse2004Members, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, InlineResponse2004Members):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
